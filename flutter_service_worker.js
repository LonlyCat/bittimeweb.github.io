'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "888cc557b2102e55c4f4bcbf58b979d7",
"index.html": "4707f082d2946b4eb940b8b560e7ac2d",
"/": "4707f082d2946b4eb940b8b560e7ac2d",
"main.dart.js": "df7de9cdd5ec167bbcc60dedb011474e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "654a5f7a0d442bc3207638bd1a19344e",
"icons/Icon-192.png": "b1611d0b82b335ece449924e3bdcf3c5",
"icons/Icon-maskable-192.png": "b1611d0b82b335ece449924e3bdcf3c5",
"manifest.json": "f5d7ddbbb45c7b77ace0c3f7f3b8e0fc",
"assets/AssetManifest.json": "b8c08b85005d8c7eb80071e74835d9ad",
"assets/NOTICES": "b2b5e721b8cb047ab34004b7fb054a87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/static/file/BTTMWhitePaperV01.pdf": "03df151f54f13f93f2ee2bdd6723bf59",
"assets/static/image/telegram.png": "32fcc0dd2eb979c1d6ed7c4d09102aaa",
"assets/static/image/bttm_slogan_img.png": "edf93e398825aee6e31c210df6323d4e",
"assets/static/image/twiter.svg": "5ece0e52e703e83fb3b8dc0d31d2d88a",
"assets/static/image/bttm_head_img.png": "6868a7b77b1a097c70e621953ced2da0",
"assets/static/image/bttm_twitter.png": "44a9efa15d4d3da512a663bd89ddf8a7",
"assets/static/image/bittime_regist.png": "350386e9b29a334cd1d99d25ae47b9d6",
"assets/static/image/bttm_partner_doku.png": "1e7d34f4961f4c042bc6264914cc2a5a",
"assets/static/image/bttm_instagram.png": "30f91adecc38cc7e0eb771dd1987732e",
"assets/static/image/bttm_partner_fireblocks.png": "5d779628ab3672f479ca6ed07c763c15",
"assets/static/image/bittime_login_logo.png": "dcbe361fb7ff872a3c31f6e39a159110",
"assets/static/image/bttm_partner_e2pay.png": "416bd21732ad515613046d4927409b8c",
"assets/static/image/bttm_partner_notabene.png": "b84b4b5fb90c69ffa0537b99d1f26259",
"assets/static/image/bttm_partner_asli.png": "7198af29ca2d8b523fd3b55a7f358465",
"assets/static/image/bittime_qr_code.png": "1433c87f070c86f1cf2c3ba6bb98d7cb",
"assets/static/image/bttm_telegram.png": "eb2f490a8a5e41e3fe98c0de0612c92c",
"assets/static/image/bttm_partner_chainalysis.png": "d53c2ec1ed8255796edb28c339e888fb",
"assets/static/image/bittime_icon.png": "a715b45cda59aa9f196c520ce1094aee",
"assets/static/image/bittime_intro_3.png": "72898b7e8f82b4eb77720fc6644fa6eb",
"assets/static/image/bittime_intro_2.png": "d1840bcccc3437233b2c241a18ad3f1d",
"assets/static/image/bittime_intro_1.png": "75b903426fe53ae3991cdd21fe569a12",
"assets/static/image/bttm_staking_1.png": "2bddaa81348e332edf83f9d033c61fbe",
"assets/static/image/bttm_staking_2.png": "9985becfe661850a8ec78ca568cb2b3e",
"assets/static/image/bittime_head_img.jpg": "f288fd7922d0cbfebfc300beff74b0df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
