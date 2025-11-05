self.addEventListener("install", event => {
  console.log("Service Worker installed");
  event.waitUntil(
    caches.open("v1").then(cache => cache.add("/index.html"))
  );
});