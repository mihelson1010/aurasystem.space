const CACHE_NAME = 'aurasystem-v1';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.add('/')));
});
self.addEventListener('fetch', (e) => {
  if (e.request.destination === 'document') {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
