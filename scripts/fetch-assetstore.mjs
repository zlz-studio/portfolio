// Snapshot Unity Asset Store listing data into data/assetstore.json.
// Runs daily from .github/workflows/assetstore.yml (Node 18+, no dependencies).
//
// The Asset Store has no public API for price, rating or favourites, so this reads
// the product page itself: price + rating from its schema.org JSON-LD block,
// favourites from the "N users have favourite this asset" label, and the version
// from the one endpoint Unity does expose. Any field that can't be read is written
// as null, and the site simply hides it.

import { writeFile, readFile } from "node:fs/promises";

const PACKAGES = {
  anime: { id: 354900, url: "https://assetstore.unity.com/packages/vfx/shaders/zlz-anime-shader-354900" },
  env:   { id: 397684, url: "https://assetstore.unity.com/packages/vfx/shaders/zlz-env-shader-397684" },
};

const OUT = new URL("../data/assetstore.json", import.meta.url);
const UA = "Mozilla/5.0 (portfolio snapshot; +https://github.com)";

async function text(url) {
  const res = await fetch(url, { headers: { "user-agent": UA, "accept-language": "en" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

function productLd(html) {
  const blocks = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  for (const [, raw] of blocks) {
    try {
      const data = JSON.parse(raw);
      const items = Array.isArray(data) ? data : [data];
      const product = items.find((d) => d["@type"] === "Product");
      if (product) return product;
    } catch { /* skip malformed block */ }
  }
  return null;
}

const num = (v) => (v == null || v === "" || Number.isNaN(Number(v)) ? null : Number(v));

async function snapshot({ id, url }) {
  if (!id || !url) return null;
  // listPrice and discount stay null unless the package is on sale
  const out = { id, url, version: null, price: null, listPrice: null, discount: null, currency: null, rating: null, reviews: null, favourites: null, image: null };

  try {
    const html = await text(url);
    const ld = productLd(html);
    if (ld) {
      out.price = num(ld.offers?.price);
      out.currency = ld.offers?.priceCurrency ?? null;
      out.rating = num(ld.aggregateRating?.ratingValue);
      out.reviews = num(ld.aggregateRating?.reviewCount);
      const img = Array.isArray(ld.image) ? ld.image[0] : ld.image;
      if (img) out.image = img.startsWith("//") ? "https:" + img : img;
    }
    const fav = html.match(/>\s*([\d,]+)\s+users? have favou?rite/i);
    if (fav) out.favourites = Number(fav[1].replace(/,/g, ""));

    // Sale: the JSON-LD only carries the price you pay. The page state keys the list price
    // by item id, and the page also lists other packages, so find this package's item first.
    const item = html.match(new RegExp(`"id":"${id}","productId":"\\d+","itemId":"(\\d+)"`));
    const sale = item && html.match(new RegExp(`"originalPrice":\\{"itemId":"${item[1]}","originalPrice":"([\\d.]+)","finalPrice":"([\\d.]+)"[^}]*?"percentage":([\\d.]+)`));
    if (sale && Number(sale[1]) > Number(sale[2])) {
      out.listPrice = num(sale[1]);
      out.discount = Math.round(Number(sale[3]));
    }
  } catch (err) {
    console.warn(`page ${id}: ${err.message}`);
  }

  try {
    const meta = JSON.parse(await text(`https://api.assetstore.unity3d.com/package/latest-version/${id}`));
    out.version = meta.version ?? null;
  } catch (err) {
    console.warn(`version ${id}: ${err.message}`);
  }

  return out;
}

const result = { fetchedAt: new Date().toISOString(), packages: {} };
for (const [key, pkg] of Object.entries(PACKAGES)) {
  result.packages[key] = await snapshot(pkg);
}

// Keep the previous snapshot when this run read nothing at all (e.g. the page layout changed).
const gotAnything = Object.values(result.packages).some((p) => p && (p.price ?? p.rating ?? p.favourites ?? p.version) != null);
if (!gotAnything) {
  try {
    await readFile(OUT);
    console.warn("No fields could be read; keeping the existing snapshot.");
    process.exit(0);
  } catch { /* no previous file: write the empty one */ }
}

await writeFile(OUT, JSON.stringify(result, null, 2) + "\n");
console.log(JSON.stringify(result, null, 2));
