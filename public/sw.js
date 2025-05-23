const cacheName = "demo/v4";
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((c) => {
      c.addAll(["./index.html"]);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request))
    .then((res) => {
      const cloneData = res.clone();
      caches.open(cacheName).then((c) => {
        c.put(e.request, cloneData);
      });
      return res;
    })
    .cache(() => {
      return caches.match(e.request).then((file) => file);
    });
});
