const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), n = [
  s + "/app/immutable/entry/app.7d9bc834.js",
  s + "/app/immutable/assets/0.a494718f.css",
  s + "/app/immutable/nodes/0.d61e83e3.js",
  s + "/app/immutable/nodes/1.5002c549.js",
  s + "/app/immutable/nodes/10.6f64828c.js",
  s + "/app/immutable/nodes/11.c6f9999b.js",
  s + "/app/immutable/assets/12.2860deb1.css",
  s + "/app/immutable/nodes/12.f98a4471.js",
  s + "/app/immutable/assets/2.2c20c7d2.css",
  s + "/app/immutable/nodes/2.4ed6e7bd.js",
  s + "/app/immutable/assets/3.2109d544.css",
  s + "/app/immutable/nodes/3.a41bc053.js",
  s + "/app/immutable/assets/4.2862bfce.css",
  s + "/app/immutable/nodes/4.617661c9.js",
  s + "/app/immutable/assets/5.bf88a0a5.css",
  s + "/app/immutable/nodes/5.f02e37c7.js",
  s + "/app/immutable/assets/6.4a9508f1.css",
  s + "/app/immutable/nodes/6.06b58f10.js",
  s + "/app/immutable/assets/7.c908c19d.css",
  s + "/app/immutable/nodes/7.b6169bef.js",
  s + "/app/immutable/assets/8.35462fb6.css",
  s + "/app/immutable/nodes/8.ecc9b13d.js",
  s + "/app/immutable/assets/9.b47ee95b.css",
  s + "/app/immutable/nodes/9.c48641e8.js",
  s + "/app/immutable/assets/ActiveTagList.92193b89.css",
  s + "/app/immutable/assets/Checkbox.de4b02c1.css",
  s + "/app/immutable/assets/CodiconLink.bdf8e2b9.css",
  s + "/app/immutable/assets/DetailedTag.b1d0d53b.css",
  s + "/app/immutable/assets/Details.ee3eab10.css",
  s + "/app/immutable/assets/Heading3.6d93f62a.css",
  s + "/app/immutable/assets/IconLink.9d4e619a.css",
  s + "/app/immutable/assets/LoadingAnimation.79e4bc51.css",
  s + "/app/immutable/assets/ModifierSelect.31c7e0b5.css",
  s + "/app/immutable/assets/ScrollUpButton.f47fbc2e.css",
  s + "/app/immutable/assets/Searchbar.e12faf40.css",
  s + "/app/immutable/assets/Select.21b3b436.css",
  s + "/app/immutable/assets/SettingsLink.41ba7049.css",
  s + "/app/immutable/assets/SimpleTag.4fc222e7.css",
  s + "/app/immutable/assets/TextButton.292f670f.css",
  s + "/app/immutable/assets/TextInput.ff3608fc.css",
  s + "/app/immutable/chunks/ActiveTagList.10ef882f.js",
  s + "/app/immutable/chunks/Checkbox.497fa8ba.js",
  s + "/app/immutable/chunks/CodiconLink.9994dbe4.js",
  s + "/app/immutable/chunks/DetailedTag.42657508.js",
  s + "/app/immutable/chunks/Details.4623b961.js",
  s + "/app/immutable/chunks/Heading3.b8e77da3.js",
  s + "/app/immutable/chunks/IconLink.57aeb590.js",
  s + "/app/immutable/chunks/LoadingAnimation.1752780f.js",
  s + "/app/immutable/chunks/ModifierSelect.b17e978c.js",
  s + "/app/immutable/chunks/RotatingTextSelect.068e75cb.js",
  s + "/app/immutable/chunks/ScrollUpButton.7d16a589.js",
  s + "/app/immutable/chunks/Searchbar.d2df380d.js",
  s + "/app/immutable/chunks/Select.86ea1f7f.js",
  s + "/app/immutable/chunks/SettingsLink.d64e77ac.js",
  s + "/app/immutable/chunks/SimpleTag.4f811b70.js",
  s + "/app/immutable/chunks/TextButton.98b56d16.js",
  s + "/app/immutable/chunks/TextInput.f775e214.js",
  s + "/app/immutable/chunks/active-supertags-store.9241f644.js",
  s + "/app/immutable/chunks/active-tags-store.d23316a6.js",
  s + "/app/immutable/chunks/always-loop-store.7008ae9e.js",
  s + "/app/immutable/chunks/analytics.b280da65.js",
  s + "/app/immutable/chunks/await_block.af8be678.js",
  s + "/app/immutable/chunks/blocked-content-store.7cdb997c.js",
  s + "/app/immutable/chunks/cookies-accepted-store.00223971.js",
  s + "/app/immutable/chunks/each.e59479a4.js",
  s + "/app/immutable/chunks/environment.1908add3.js",
  s + "/app/immutable/chunks/feature-support.8f9b3d5f.js",
  s + "/app/immutable/chunks/firebase.ac72eb03.js",
  s + "/app/immutable/chunks/format-tag.7e313273.js",
  s + "/app/immutable/chunks/index.aa0a4971.js",
  s + "/app/immutable/chunks/index.esm2017.b35d87a0.js",
  s + "/app/immutable/chunks/index.fb84d337.js",
  s + "/app/immutable/chunks/localstorage-enabled-store.92769870.js",
  s + "/app/immutable/assets/localstorage-enabled-store.2fafd00f.css",
  s + "/app/immutable/chunks/paths.ca3da844.js",
  s + "/app/immutable/chunks/posts.c7d75618.js",
  s + "/app/immutable/chunks/result-columns-store.74912f3b.js",
  s + "/app/immutable/assets/result-columns-store.961fb085.css",
  s + "/app/immutable/chunks/scheduler.32f194ce.js",
  s + "/app/immutable/chunks/search-builder.6c15ea23.js",
  s + "/app/immutable/chunks/singletons.42fd745f.js",
  s + "/app/immutable/chunks/store-keys.c2ac77a3.js",
  s + "/app/immutable/chunks/supertags-store.e49dc1f8.js",
  s + "/app/immutable/chunks/tag-modifier-data.021c0243.js",
  s + "/app/immutable/chunks/tag-type-data.934b5280.js",
  s + "/app/immutable/chunks/tag-utils.ceb6413c.js",
  s + "/app/immutable/chunks/tags.b027a74d.js",
  s + "/app/immutable/chunks/theme-store.607066ee.js",
  s + "/app/immutable/entry/start.f993afe5.js"
], u = [
  s + "/.nojekyll",
  s + "/assets/default-user.png",
  s + "/assets/failed-to-load.svg",
  s + "/assets/load.svg",
  s + "/assets/pause.svg",
  s + "/assets/play.svg",
  s + "/assets/shironeko-confused.png",
  s + "/assets/shironeko-crying.png",
  s + "/assets/shironeko-x.png",
  s + "/favicon-status.svg",
  s + "/favicon.svg",
  s + "/font/Roboto-Italic.woff",
  s + "/font/Roboto-Italic.woff2",
  s + "/font/Roboto-Regular.woff",
  s + "/font/Roboto-Regular.woff2",
  s + "/font/ZenKakuGothicNew-Black-subset.woff",
  s + "/font/ZenKakuGothicNew-Black-subset.woff2",
  s + "/font/codicon.woff",
  s + "/font/codicon.woff2",
  s + "/icon/google.png",
  s + "/icon/ks-192.png",
  s + "/icon/ks-512.png",
  s + "/icon/ks-maskable-128.png",
  s + "/icon/ks-maskable-192.png",
  s + "/icon/ks-maskable-384.png",
  s + "/icon/ks-maskable-48.png",
  s + "/icon/ks-maskable-512.png",
  s + "/icon/ks-maskable-72.png",
  s + "/icon/ks-maskable-96.png",
  s + "/manifest.json",
  s + "/robots.txt",
  s + "/sw.js"
], l = "780cdd4", m = `cache-${l}`, i = [
  ...n,
  // the app itself
  ...u.filter((a) => !a.endsWith(".nojekyll"))
  // everything in `static`
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(m)).addAll(i);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const e of await caches.keys())
      e !== m && await caches.delete(e);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(a.request.url), p = await caches.open(m);
    if (i.includes(e.pathname))
      return p.match(e.pathname);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && p.put(a.request, c.clone()), c;
    } catch {
      return p.match(a.request);
    }
  }
  a.respondWith(t());
});
