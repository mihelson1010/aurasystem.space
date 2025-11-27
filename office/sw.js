const CACHE_NAME = 'aura-office-v1';
const urlsToCache = [
  '/office/',
  '/office/index.html',
  '/office/logo192.png',
  '/office/logo512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
