// let cachedData = "dashboard"

// this.addEventListener("install", (event)=>{
//      event.waitUntill(
//         caches.open(cachedData).then((cache)=>{
//              cache.addAll([
//                 "/static/js/bundle.js",
//                 "/index.html",
//                 "/ws",
//                 "/"
//              ]).then(() => self.skipWaiting());
//         })
//      )
// })


// this.addEventListener("fetch", (event)=>{
//    if(!navigator.onLine){
//       event.respondWith(
//          caches.match(event.request).then((res)=>{
//             if(res){
//                return res;
//             }
//             let requestUrl = event.request.clone()
//             return fetch(requestUrl)
//          })
//       )
//    }
// })



