self.addEventListener("install", function(n) {
  self.skipWaiting();
});
self.addEventListener("activate", function(n) {
  self.registration.unregister().then(function() {
    return self.clients.matchAll();
  }).then(function(t) {
    t.forEach((e) => e.navigate(e.url));
  });
});
