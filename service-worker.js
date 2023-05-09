
const CACHE = "pwabuilder-offline"
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);







































//self.addEventListener('fetche', function (event){
  //  event.respondWith(
     //   caches.match(event.request)
     //  .then (function (response){
        //    if (response)
         //   {
        //       return response;
         //   }
        //    return fetch (event.request);
       // })
 //   );
//});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
      self.skipWaiting();
    }
  });
  
  self.addEventListener('fetch', function (event) {
    //Atualizacao internet
    event.respondWith(async function () {
       try {
         return await fetch(event.request);
       } catch (err) {
         return caches.match(event.request);
       }
     }());

    });