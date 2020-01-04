const cachingAssets = [
  '/',
  'index.html',
  './Assets/50yrs.png',
  './Assets/bout.png',
  './Assets/bout_pink.png',
  './Assets/ot.png',
  './Assets/eedback.png',
  './Assets/eedback_pink.png',
  './Assets/am.png',
  './Assets/arco-oriolesi-wqLGlhjr6Og-unsplash.jpg',
  './Assets/ave.png',
  './Assets/ave_pink.png',
  './Assets/ub_logo.png',
  './Assets/able.png',
  './Assets/ables_pink.png',
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] install');
  e.waitUntil(
    caches.open('pmjay')
      .then((cache) => {
        console.log('[Service Worker] caching app shell');
        return cache.addAll(cachingAssets);
      }).catch((err) => {
        console.log('[Service Worker] caching app shell error');
        console.error(err);
      }),
  );
});


self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((response) => response || fetch(event.request)),
  );
});
