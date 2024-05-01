const CACHE_NAME = 'v1.2';

const urlsToCache = [
  '/img/patrones/cdmex.jpg',

  '/img/locutores/erik_casado.png',
  '/img/locutores/mauricio.jpeg',

  '/img/logo/logo.png',
  '/img/logo/logo.webp',


  '/img/services/anuncios.jpg',
  'img/services/radio2.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devuelve la respuesta del caché o, si no se encuentra, realiza una solicitud de red.
        return response || fetch(event.request);
      })
  );
});
