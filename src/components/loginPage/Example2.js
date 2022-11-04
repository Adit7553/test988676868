import React from 'react'
import { useSelector } from 'react-redux'


export default function Example2() {


const result = useSelector((state) => state.INPUTBAR)

let res = useSelector((state) => state.INPUTBAR)
if(res.login){
    res = res.login.message
}else{
    res = ""
}

console.log("res : ",res);

  return (
    <>
<h5>Example2 here...</h5>
    </>
  )
}
