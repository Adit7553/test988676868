// import React,{useEffect, useState} from 'react'
// import axios from 'axios'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// export default function BasicRechart(props) {

//   const [datastack, setDatastack] = useState([])
//   const [mode, setMode] = useState("online")

//   useEffect(()=>{

//     async function updateChartApi(){
//       await axios.get("https://dummyjson.com/products").then((res)=>{
//         let response = res.data 
//         let products = response.products
//         let dataRes= [];
//         for( let i = 0 ; i < 8 ; i++){
//           dataRes.push({
//             modal: products[i]["title"],
//             price: products[i]["price"],
//           })
//         }
//         localStorage.setItem("products",JSON.stringify(dataRes))
//         setDatastack(dataRes)
//       }).catch((err)=>{
//          let localStoredData = localStorage.getItem("products")
//          setDatastack(JSON.parse(localStoredData))
//          setMode("offline")
//       })
//     }
//     updateChartApi()
//   },[])

//   console.log("data : ",datastack);

//   return (
//     <>
//     {
//       (mode === "offline") ? 
//       <p>Note : You are in offlne mode now, don't expect real time data</p>
//       :
//       <p>Note : You are in online mode now</p>
//     }
  
// {
//   (datastack.length > 0) ?
//    (<div>
//         {/* <h6>BasicReactJsChart</h6> */}
//         <BarChart
//           width={900}
//           height={500}
//           data={datastack}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="modal" />
//           <YAxis/>
//           <Tooltip />
//           <Legend />
//           {/* <Bar dataKey="modal" stackId="a" fill="#8884d8" /> */}
//           <Bar dataKey="price" stackId="a" fill="#82ca9d" />
//         </BarChart>
//     </div>)
//     :
//     (" ")
// }
// </>
//   )
// }





