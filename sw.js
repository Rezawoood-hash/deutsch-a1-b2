const CACHE_NAME = 'babalulue-pwa-v3.6';
const APP_SHELL = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './data-a1.bin',
  './data-a2.bin',
  './data-b1.bin',
  './data-b2.bin',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname.includes('wikimedia.org') || url.hostname.includes('translate.google.com')) {
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then(cached => {
        if (cached) {
          if (url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.json') || url.pathname.endsWith('/')) {
            fetch(req).then(res => {
              if (res && res.ok) caches.open(CACHE_NAME).then(c => c.put(req, res));
            }).catch(() => {});
          }
          return cached;
        }
        return fetch(req).then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
          }
          return res;
        });
      })
    );
    return;
  }

  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => cached))
    );
  }
});
