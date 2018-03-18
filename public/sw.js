var dataCacheName = 'Static';
// var cacheName = 'weatherPWA-final-1';
var filesToCache = [
  '/',
  '/index.html',
  'public/icons/icon-android-144x144.png'
];


self.addEventListener('install', function(event) {
  console.log('SW installed');
  event.waitUntil(
    caches.open('static').then(function(cache) {
       return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('activate', function() {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});
