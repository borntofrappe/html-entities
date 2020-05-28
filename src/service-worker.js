const cacheName = 'html-entities';
const files = ['/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
        console.log(response);
        return response || fetch(e.request);
    })
  );
});
