self.addEventListener('install', (e) => {
  console.log('PWA Service Worker terinstall');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
