var cacheName = 'Jeu-morpion';
var filesToCache = [ //3 fichiers à installer sur le téléphone
  '/',
  '/index.html',
  '/tic-tac-toe.css',
  '/tic-tac-toe.js'
];

/* Mettre en cache tous les fichiers */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* il écoute l'évènement fetch. Si le résulat est nul alors on récupère ce qu'il y a dans le cache sinon on récupère depuis le site internet 
C'est le mode offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
