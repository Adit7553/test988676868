
// //setting up service worker by connect it to service worker file(sw.js)

// export default function swDev(){
//     let swFileUrl = `${process.env.PUBLIC_URL}/sw.js`
//     navigator.serviceWorker.register(swFileUrl).then((response)=>{
//          console.log("swDev response : ",response)
//          console.log("service worker configured successfully")
//     }).catch((error)=>{
//         console.log("there is a problem to configure service worker , Error : ",error)
//     })
// }