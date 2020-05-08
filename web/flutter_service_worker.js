'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "a861c6454e2739680ac381780fb90792",
"/": "a861c6454e2739680ac381780fb90792",
"main.dart.js": "0f5342d2435abf5bd4a776814893d315",
"favicon.png": "bb24fa1fa39f0a30a56c9d1232906281",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e0ca6377245f2862f25e2d39bac34448",
"assets/LICENSE": "59844a026d05c04ff832a90250bb1baa",
"assets/images/pic1.jpg": "9103ba49a101e8cb2d66cb63c9631f65",
"assets/images/pic2.png": "1c6fbfed9769d8156c863f1c31233a00",
"assets/AssetManifest.json": "4ba66c2f4f87ff062abb89625c25756e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
