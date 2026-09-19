(function () {
  const Z = "https://zlz-studio.github.io";

  // [title, thumbnail, hover animation (optional), docs path]
  // Same thumbnails and hover clips as the feature cards on zlz-studio.github.io.
  const T = "/images/thumbs/";
  const ANIME = {
    hair: [
      ["Hair System",       T + "hair-system.webp",       null, "/features/hair-system/"],
      ["Hair Highlight",    T + "hair-highlight.webp",    null, "/features/Hair-Highlight/"],
      ["Face Shadow",       T + "faceshadow.webp",        null, "/features/faceshadow/"],
      ["Head Direction",    T + "head-direction.webp",    null, "/features/Head-Direction-System/"],
    ],
    lighting: [
      ["Base Lighting",     T + "base-lighting.webp",     "/images/thumbs-anim/base-lighting.webp", "/features/Base-Character-Lighting/"],
      ["ToonRamp Smooth",   T + "toonramp.webp",          null, "/features/ToonRampSmooth/"],
      ["Shadow Edge",       T + "shadowedge.webp",        null, "/features/ShadowEdge/"],
      ["Soft Light",        T + "soft-light.webp",        null, "/features/Soft-Light/"],
      ["Rim Light",         T + "rimlight.webp",          null, "/features/RimLight/"],
      ["Contact Shadow",    T + "contact-shadow.webp",    null, "/features/Contact-Shadow/"],
    ],
    surface: [
      ["Base Colors",       T + "base-colors.webp",       null, "/features/Base-Character-Colors/"],
      ["Normal Map",        T + "normalmap.webp",         null, "/features/NormalMap/"],
      ["Specular",          T + "specular.webp",          "/features/Specular/Specular2.webp", "/features/Specular/"],
      ["Metallic",          T + "metallic.webp",          "/features/Metallic/Showcase_Metallic_On.webp", "/features/Metallic/"],
      ["Emissive",          T + "emissive.webp",          null, "/features/Emissive/"],
      ["Transparency",      T + "transparency.webp",      "/features/Transparency/Transparency.webp", "/features/Transparency/"],
      ["Outline",           T + "outline.webp",           null, "/features/Outline/"],
    ],
    fx: [
      ["Light Sweep",       T + "lightsweep.webp",        "/features/LightSweep/LightSweep.webp",            "/features/LightSweep/"],
      ["Outline Select",    T + "outline-selection.webp", "/features/Outline-Selection/OutlineSelection.webp", "/features/Outline-Selection/"],
      ["Dither",            T + "dither.webp",            "/features/Dither/Dither_Occlusion.webp",          "/features/Dither/"],
      ["Dissolve",          T + "dissolve.webp",          "/features/Dissolve/Demo_Dissolve.webp",           "/features/Dissolve/"],
      ["Get Hit",           T + "gethit.webp",            "/features/GetHit/Demo_GetHit.webp",               "/features/GetHit/"],
      ["Target Darken",     T + "target-darken.webp",     "/features/Target-Darken/Demo_Target-Darken.webp", "/features/Target-Darken/"],
      ["Upgrade",           T + "upgrade.webp",           "/features/Upgrade/Demo_Upgrade.webp",             "/features/Upgrade/"],
      ["Indicator",         T + "indicator.webp",         "/features/Indicator/Demo_Indicator.webp",         "/features/Indicator/"],
    ],
  };

  const ENV = {
    surface: [
      ["Paint Mode",        "/env/shader/Surface_PaintMode_Brush_Thumb.webp",  "/env/shader/Surface_PaintMode_Brush_Hover.webp",  "/env/shader/paint-mode/"],
      ["Triplanar",         "/env/shader/Surface_Triplanar_Thumb.webp",        "/env/shader/Surface_Triplanar_Hover.webp",        "/env/shader/triplanar/"],
      ["Planar Reflection", "/env/shader/Surface_PlanarReflection_Thumb.webp", "/env/shader/Surface_PlanarReflection_Hover.webp", "/env/shader/planar-reflection/"],
      ["Normal Map",        "/env/shader/Surface_NormalMap_Thumb.webp",        "/env/shader/Surface_NormalMap_Hover.webp",        "/env/shader/normal/"],
      ["Specular / Metal",  "/env/shader/Surface_SpecularMetallic_Thumb.webp", "/env/shader/Surface_SpecularMetallic_Hover.webp", "/env/shader/specular/"],
      ["Stochastic",        "/env/shader/Surface_Stochastic_Thumb.webp",       "/env/shader/Surface_Stochastic_Hover.webp",       "/env/shader/stochastic-tiling/"],
      ["Accumulation",      "/env/shader/Surface_SnowAccumulation_Thumb.webp", "/env/shader/Surface_SnowAccumulation_Hover.webp", "/env/shader/snow-accumulation/"],
      ["Wind",              "/env/shader/Surface_LeafWind_Thumb.webp",         "/env/shader/Surface_LeafWind_Hover.webp",         "/env/shader/leaf-wind/"],
      ["Emission",          "/env/shader/Surface_Emissive_Thumb.webp",         "/env/shader/Surface_Emissive_Hover.webp",         "/env/shader/emissive/"],
      ["Fog",               "/env/shader/Surface_Fog_Thumb.webp",              "/env/shader/Surface_Fog_Hover.webp",              "/env/shader/fog/"],
      ["Target Darken",     "/env/fx/FX_TargetDarken_Thumb.webp",              "/env/fx/FX_TargetDarken_Hover.webp",              "/env/fx/target-darken/"],
      ["Overview",          "/env/shader/Surface_Overview_Thumb.webp",         null,                                              "/env/shader/"],
    ],
    grass: [
      ["Setup",             "/env/grass/Grass_Setup_Thumb.webp",        "/env/grass/Grass_Setup_Hover.webp",        "/env/grass/grass-setup/"],
      ["Material",          "/env/grass/Grass_Material_Thumb.webp",     "/env/grass/Grass_Material_Hover.webp",     "/env/grass/grass-material/"],
      ["Global Wind",       "/env/grass/Grass_Global_Wind_Thumb.webp",  "/env/grass/Grass_Global_Wind_Hover.webp",  "/env/grass/grass-global-wind/"],
      ["Optimized",         "/env/grass/Grass_Optimized_Thumb.webp",    "/env/grass/Grass_Optimized_Hover.webp",    "/env/grass/grass-optimized/"],
      ["Color Camera",      "/env/grass/Grass_Color_Camera_Thumb.webp", "/env/grass/Grass_Color_Camera_Hover.webp", "/env/grass/grass-color-camera/"],
      ["Interaction",       "/env/grass/Grass_Interaction.webp",        "/env/grass/Grass_Interaction_Hover.webp",  "/env/grass/grass-interaction/"],
      ["LOD",               "/env/grass/Grass_LOD.webp",                "/env/grass/Grass_LOD_Hover.webp",          "/env/grass/grass-lod/"],
      ["Edges",             "/env/grass/Grass_Edges_Thumb.webp",        "/env/grass/Grass_Edges_Hover.webp",        "/env/grass/grass-edges/"],
    ],
    water: [
      ["Interaction",       "/env/water/Water_Interaction_Thumb.webp", "/env/water/Water_Interaction_Hover.webp", "/env/water/water-interaction/"],
      ["Waves",             "/env/water/Water_Waves_Thumb.webp",       "/env/water/Water_Waves_Hover.webp",       "/env/water/water-waves/"],
      ["Floater",           "/env/water/Water_Floater_Thumb.webp",     "/env/water/Water_Floater_Hover.webp",     "/env/water/water-floater/"],
      ["Foam",              "/env/water/Water_Foam_Thumb.webp",        "/env/water/Water_Foam_Hover.webp",        "/env/water/water-foam/"],
      ["Ring Wave",         "/env/water/Water_Ring_Wave_Thumb.webp",   "/env/water/Water_Ring_Wave_Hover.webp",   "/env/water/water-ring-wave/"],
      ["Sparkle",           "/env/water/Water_Sparkle_Thumb.webp",     "/env/water/Water_Sparkle_Hover.webp",     "/env/water/water-sparkle/"],
      ["Caustics",          "/env/water/Water_Caustics_Thumb.webp",    "/env/water/Water_Caustics_Hover.webp",    "/env/water/water-caustics/"],
      ["Underwater",        "/env/water/Underwater_Thumb.webp",        "/env/water/Underwater_Hover.webp",        "/env/water/water-underwater/"],
    ],
  };

  const url = (p) => (p.startsWith("/") ? Z + p : p);

  function renderCards(el, items) {
    el.innerHTML = items.map(([title, thumb, anim, href], i) => `
      <a class="card" href="${Z + href}" target="_blank" rel="noopener">
        <div class="card__img"><img src="${url(thumb)}" ${anim ? `data-anim="${url(anim)}"` : ""} alt="" loading="lazy" decoding="async"></div>
        <div class="card__cap"><span>${title}</span><span>${String(i + 1).padStart(2, "0")}</span></div>
      </a>`).join("");

    // animated webp swaps in on hover, only downloaded the first time
    el.querySelectorAll("img[data-anim]").forEach((img) => {
      const card = img.closest(".card");
      const still = img.src;
      card.addEventListener("mouseenter", () => { img.src = img.dataset.anim; });
      card.addEventListener("mouseleave", () => { img.src = still; });
    });
  }

  // folder tabs: each tab list names its grid in data-grid; the first tab starts open
  function setupTabs(tablistId, groups) {
    const list = document.getElementById(tablistId);
    if (!list) return;
    const grid = document.getElementById(list.dataset.grid);
    const tabs = list.querySelectorAll("button");
    renderCards(grid, groups[tabs[0].dataset.tab]);

    tabs.forEach((btn) => {
      btn.insertAdjacentHTML("beforeend", `<sup>${groups[btn.dataset.tab].length}</sup>`);
      btn.addEventListener("click", () => {
        if (btn.getAttribute("aria-selected") === "true") return;
        tabs.forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
        grid.classList.add("is-swapping");
        setTimeout(() => {
          renderCards(grid, groups[btn.dataset.tab]);
          grid.classList.remove("is-swapping");
        }, 220);
      });
    });
  }

  setupTabs("animeTabs", ANIME);
  setupTabs("envTabs", ENV);

  // ---- WebGL demos: nothing loads until the visitor asks for it ----
  document.querySelectorAll(".demo").forEach((demo) => {
    const run = demo.querySelector(".demo__run");
    const fs = demo.querySelector(".demo__fs");
    run.addEventListener("click", () => {
      const frame = document.createElement("iframe");
      frame.src = demo.dataset.src;
      frame.title = demo.dataset.title;
      frame.allow = "fullscreen; autoplay";
      frame.allowFullscreen = true;
      demo.querySelector(".demo__poster").remove();
      run.remove();
      demo.prepend(frame);
      demo.classList.add("is-live");
      fs.hidden = false;
      fs.addEventListener("click", () => (frame.requestFullscreen || frame.webkitRequestFullscreen).call(frame));
    });
  });

  // ---- before / after sliders ----
  document.querySelectorAll(".compare").forEach((cmp) => {
    const range = cmp.querySelector(".compare__range");
    range.addEventListener("input", () => cmp.style.setProperty("--pos", range.value + "%"));
  });


  // ---- reveal on scroll ----
  const targets = document.querySelectorAll(".section__head, .product, .case, .game, .pipe__item, .contact > *");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  targets.forEach((t) => { t.classList.add("rv"); io.observe(t); });

  document.getElementById("year").textContent = new Date().getFullYear();
})();

// ---- hero cover: slow crossfade through work stills ----
(function () {
  const cover = document.getElementById("cover");
  if (!cover) return;
  const slides = [...cover.querySelectorAll("img")];
  const cap = document.getElementById("coverCap");
  const idx = document.getElementById("coverIdx");
  const bar = document.getElementById("coverBar");
  const DURATION = 5000;
  const pad = (n) => String(n).padStart(2, "0");
  let i = 0;

  cover.style.setProperty("--slide", DURATION / 1000 + "s");

  function runBar() {
    bar.classList.remove("is-run");
    void bar.offsetWidth;
    bar.classList.add("is-run");
  }

  function show(n) {
    slides[i].classList.remove("is-on");
    i = (n + slides.length) % slides.length;
    slides[i].classList.add("is-on");
    cap.textContent = slides[i].dataset.cap;
    idx.textContent = `${pad(i + 1)} / ${pad(slides.length)}`;
    runBar();
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || slides.length < 2) return;
  runBar();
  setInterval(() => show(i + 1), DURATION);
})();

// ---- Asset Store cards ----
// Version is read live (Unity leaves that endpoint open to any site).
// Price, rating and favourites come from data/assetstore.json, refreshed daily by
// .github/workflows/assetstore.yml. Anything missing or stale stays hidden.
(function () {
  const SHOW = { version: true, price: true, rating: true, favourites: true };
  const MAX_AGE_DAYS = 10;

  const cards = document.querySelectorAll(".store__card[data-store]");
  if (!cards.length) return;

  function put(card, field, render) {
    const el = card.querySelector(`[data-field="${field}"]`);
    if (!el || !SHOW[field]) return;
    render(el);
    el.hidden = false;
  }

  function fill(card, pkg) {
    if (pkg.image) {
      const img = card.querySelector('[data-field="image"]');
      if (img && img.src !== pkg.image) img.src = pkg.image;
    }
    if (pkg.price != null) {
      put(card, "price", (el) => {
        el.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: pkg.currency || "USD" }).format(pkg.price);
      });
    }
    if (pkg.rating != null) {
      put(card, "rating", (el) => {
        el.querySelector(".stars__fill").style.width = Math.max(0, Math.min(5, pkg.rating)) / 5 * 100 + "%";
        el.querySelector("b").textContent = Number.isInteger(pkg.rating) ? pkg.rating : pkg.rating.toFixed(1);
        el.querySelector("i").textContent = pkg.reviews != null ? `(${pkg.reviews})` : "";
      });
    }
    if (pkg.favourites != null) {
      put(card, "favourites", (el) => { el.querySelector("b").textContent = pkg.favourites.toLocaleString("en-US"); });
    }
    if (pkg.version) setVersion(card, pkg.version);
  }

  function setVersion(card, v) {
    put(card, "version", (el) => { el.textContent = "v" + v; });
  }

  fetch("data/assetstore.json", { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null)
    .then((data) => {
      const fresh = data && (Date.now() - Date.parse(data.fetchedAt)) / 864e5 <= MAX_AGE_DAYS;
      cards.forEach((card) => {
        const pkg = fresh ? data.packages?.[card.dataset.store] : null;
        if (pkg) fill(card, pkg);

        // live version wins over the snapshot
        const id = card.dataset.id || pkg?.id;
        if (!id) return;
        fetch(`https://api.assetstore.unity3d.com/package/latest-version/${id}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((meta) => { if (meta?.version) setVersion(card, meta.version); })
          .catch(() => {});
      });
    });
})();

// ---- clip reels: each card plays its clips once each, in order, then starts over.
// The counter shows which clip is playing; the bar shows how long until the next one.
// Only plays while the card is on screen.
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pad = (n) => String(n).padStart(2, "0");

  document.querySelectorAll(".reel[data-clips]").forEach((reel) => {
    const clips = reel.dataset.clips.split(",").map((s) => s.trim());
    reel.innerHTML = `
      <video muted playsinline preload="none"></video>
      <div class="reel__hud mono"><span class="reel__count">${pad(1)} / ${pad(clips.length)}</span></div>
      <span class="reel__bar"><i></i></span>`;
    const video = reel.querySelector("video");
    const count = reel.querySelector(".reel__count");
    const fill = reel.querySelector(".reel__bar i");
    let i = 0, visible = false, raf = 0;

    function load(n) {
      i = (n + clips.length) % clips.length;
      count.textContent = `${pad(i + 1)} / ${pad(clips.length)}`;
      video.src = clips[i];
      video.play().catch(() => {});
    }

    // one pass per clip, then the next; after the last clip it wraps to the first
    video.addEventListener("ended", () => {
      if (clips.length > 1) load(i + 1);
      else { video.currentTime = 0; video.play().catch(() => {}); }
    });

    function tick() {
      fill.style.transform = `scaleX(${Math.min(1, video.currentTime / (video.duration || 1))})`;
      raf = visible ? requestAnimationFrame(tick) : 0;
    }

    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) {
        if (!video.src) load(0);
        else if (!reduce) video.play().catch(() => {});
        if (!raf) raf = requestAnimationFrame(tick);
      } else {
        video.pause();
      }
    }, { rootMargin: "150px 0px" }).observe(reel);

    if (reduce) video.addEventListener("playing", () => video.pause(), { once: true });
  });
})();
