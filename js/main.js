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
      ["Tone Mapping",      "/setup-character/Tone-Mapping/Anime.webp", null, "/setup-character/Tone-Mapping/"],
    ],
    surface: [
      ["Base Colors",       T + "base-colors.webp",       null, "/features/Base-Character-Colors/"],
      ["Normal Map",        T + "normalmap.webp",         null, "/features/NormalMap/"],
      ["Specular",          T + "specular.webp",          "/features/Specular/Specular2.webp", "/features/Specular/"],
      ["Metallic",          T + "metallic.webp",          "/features/Metallic/Showcase_Metallic_On.webp", "/features/Metallic/"],
      ["Emissive",          T + "emissive.webp",          null, "/features/Emissive/"],
      ["Transparency",      T + "transparency.webp",      "/features/Transparency/Transparency.webp", "/features/Transparency/"],
      ["Outline",           T + "outline.webp",           null, "/features/Outline/"],
      // still cropped from the Performance docs page (ZLZ Shader Optimizer window)
      ["Optimization",      "assets/anime/optimization.webp", null, "/performance/"],
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
    // edited clips (assets/env/surface), same treatment as water below
    surface: [
      ["Paint Mode",        null, "assets/env/surface/Surface_PaintMode.mp4",    "/env/shader/paint-mode/"],
      ["Triplanar",         null, "assets/env/surface/Surface_Triplanar.mp4",    "/env/shader/triplanar/"],
      ["Planar Reflection", null, "assets/env/surface/Surface_Reflection.mp4",   "/env/shader/planar-reflection/"],
      ["Normal Map",        null, "assets/env/surface/Surface_Normal.mp4",       "/env/shader/normal/"],
      ["Specular / Metal",  null, "assets/env/surface/Surface_Specular.mp4",     "/env/shader/specular/"],
      ["Stochastic",        null, "assets/env/surface/Surface_Stochastic.mp4",   "/env/shader/stochastic-tiling/"],
      ["Accumulation",      null, "assets/env/surface/Surface_Accumulation.mp4", "/env/shader/snow-accumulation/"],
      ["Wind",              null, "assets/env/surface/Surface_Leaf.mp4",         "/env/shader/leaf-wind/"],
      ["Emission",          null, "assets/env/surface/Surface_Emission.mp4",     "/env/shader/emissive/"],
      ["Fog",               null, "assets/env/surface/Surface_Fog.mp4",          "/env/shader/fog/"],
      ["Target Darken",     null, "assets/env/surface/Surface_Darken.mp4",       "/env/fx/target-darken/"],
    ],
    // edited clips (assets/env/grass), same treatment as water below
    grass: [
      ["Setup",             null, "assets/env/grass/Grass_Setup.mp4",       "/env/grass/grass-setup/"],
      ["Material",          null, "assets/env/grass/Grass_Material.mp4",    "/env/grass/grass-material/"],
      ["Global Wind",       null, "assets/env/grass/GlobalWind.mp4",        "/env/grass/grass-global-wind/"],
      ["Optimized",         null, "assets/env/grass/Grass_Baker.mp4",       "/env/grass/grass-optimized/"],
      ["Color Camera",      null, "assets/env/grass/Grass_Colors.mp4",      "/env/grass/grass-color-camera/"],
      ["Interaction",       null, "assets/env/grass/Grass_Interaction.mp4", "/env/grass/grass-interaction/"],
      ["LOD",               null, "assets/env/grass/Grass_LOD.mp4",         "/env/grass/grass-lod/"],
      ["Edges",             null, "assets/env/grass/Grass_Collider.mp4",    "/env/grass/grass-edges/"],
    ],
    // edited clips (assets/env/water, 960x540, no audio): no thumbnail, they loop while on screen
    water: [
      ["Interaction",       null, "assets/env/water/Water_Trails.mp4",    "/env/water/water-interaction/"],
      ["Waves",             null, "assets/env/water/Water_Waves.mp4",     "/env/water/water-waves/"],
      ["Floater",           null, "assets/env/water/Water_Floater.mp4",   "/env/water/water-floater/"],
      ["Foam",              null, "assets/env/water/Water_Foam.mp4",      "/env/water/water-foam/"],
      ["Ring Wave",         null, "assets/env/water/Water_RingWave.mp4",  "/env/water/water-ring-wave/"],
      ["Sparkle",           null, "assets/env/water/Water_Sparkle.mp4",   "/env/water/water-sparkle/"],
      ["Caustics",          null, "assets/env/water/Water_Caustics.mp4",  "/env/water/water-caustics/"],
      ["Underwater",        null, "assets/env/water/Underwater.mp4",      "/env/water/water-underwater/"],
    ],
  };

  const url = (p) => (p.startsWith("/") ? Z + p : p);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // a clip plays only while its card is on screen; nothing downloads before that
  const clipWatch = new IntersectionObserver((entries) => {
    entries.forEach(({ target: v, isIntersecting }) => {
      if (!isIntersecting) return v.pause();
      if (!v.src) v.src = v.dataset.src;
      if (!reduceMotion) v.play().catch(() => {});
    });
  }, { rootMargin: "150px 0px" });

  function renderCards(el, items) {
    el.querySelectorAll("video").forEach((v) => clipWatch.unobserve(v));
    el.innerHTML = items.map(([title, thumb, anim, href], i) => `
      <a class="card" href="${Z + href}" target="_blank" rel="noopener">
        <div class="card__img">${thumb
          ? `<img src="${url(thumb)}" ${anim ? `data-anim="${url(anim)}"` : ""} alt="" loading="lazy" decoding="async">`
          : `<video data-src="${url(anim)}" muted loop playsinline preload="none"></video>`}</div>
        <div class="card__cap"><span>${title}</span><span>${String(i + 1).padStart(2, "0")}</span></div>
      </a>`).join("");

    el.querySelectorAll("video").forEach((v) => clipWatch.observe(v));

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
    const panel = grid.closest(".feat__panel");
    const tabs = [...list.querySelectorAll("button")];
    const hint = list.closest(".feat__head").querySelector(":scope > span");
    const show = (items) => {
      renderCards(grid, items);
      // the hint only makes sense for tabs with hover animations (clip tabs play on their own)
      if (hint) hint.textContent = items.some((it) => it[1] && it[2]) ? "hover to play" : "click for docs";
    };
    show(groups[tabs[0].dataset.tab]);

    panel.id = tablistId + "Panel";
    tabs.forEach((btn, n) => {
      btn.id = tablistId + "-" + btn.dataset.tab;
      btn.setAttribute("aria-controls", panel.id);
      btn.tabIndex = n ? -1 : 0; // the list is one tab stop; arrow keys move inside it
      btn.insertAdjacentHTML("beforeend", `<sup>${groups[btn.dataset.tab].length}</sup>`);
      btn.addEventListener("click", () => select(btn));
    });
    panel.setAttribute("aria-labelledby", tabs[0].id);

    // on phones the row scrolls with its scrollbar hidden; fade the edge while tabs are off-screen
    const head = list.closest(".feat__head");
    const fade = () => head.classList.toggle("has-more", list.scrollWidth - list.scrollLeft - list.clientWidth > 1);
    list.addEventListener("scroll", fade, { passive: true });
    addEventListener("resize", fade);
    if (document.fonts) document.fonts.ready.then(fade);
    fade();

    list.addEventListener("keydown", (e) => {
      const at = tabs.indexOf(document.activeElement);
      const to = { ArrowLeft: at - 1, ArrowRight: at + 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (at < 0 || to === undefined) return;
      e.preventDefault();
      const next = tabs[(to + tabs.length) % tabs.length];
      select(next);
      next.focus();
    });

    function select(btn) {
      if (btn.getAttribute("aria-selected") === "true") return;
      tabs.forEach((b) => {
        b.setAttribute("aria-selected", String(b === btn));
        b.tabIndex = b === btn ? 0 : -1;
      });
      panel.setAttribute("aria-labelledby", btn.id);
      grid.classList.add("is-swapping");
      setTimeout(() => {
        show(groups[btn.dataset.tab]);
        grid.classList.remove("is-swapping");
      }, 220);
    }
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

      // iOS Safari has no element fullscreen; hide the button rather than throw on click
      const goFull = frame.requestFullscreen || frame.webkitRequestFullscreen;
      if (goFull) {
        fs.hidden = false;
        fs.addEventListener("click", () => goFull.call(frame));
      }
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
      const money = new Intl.NumberFormat("en-US", { style: "currency", currency: pkg.currency || "USD" });
      put(card, "price", (el) => {
        el.textContent = money.format(pkg.price);
        // on sale: show the list price struck through and the discount, like the store does
        if (pkg.listPrice > pkg.price) {
          el.insertAdjacentHTML("beforeend", ` <s>${money.format(pkg.listPrice)}</s>`);
          if (pkg.discount) el.insertAdjacentHTML("beforeend", ` <em>-${pkg.discount}%</em>`);
        }
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

// ---- copy the email address: most people paste it rather than open a mail client ----
(function () {
  const btn = document.querySelector(".contact__copy");
  if (!btn) return;
  if (!navigator.clipboard) { btn.hidden = true; return; } // no clipboard: the mailto link still works
  const mail = document.querySelector(".contact__mail");
  const idle = btn.textContent;
  let timer = 0;

  function flash(text, done) {
    btn.textContent = text;
    btn.classList.toggle("is-done", done);
    clearTimeout(timer);
    timer = setTimeout(() => { btn.textContent = idle; btn.classList.remove("is-done"); }, 1800);
  }

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.mail).then(() => flash("Copied", true)).catch(() => {
      // refused: select the address instead so it can still be copied by hand
      const range = document.createRange();
      range.selectNodeContents(mail);
      const sel = getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      flash("Press Ctrl+C", false);
    });
  });
})();
