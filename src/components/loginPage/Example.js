import React from 'react'
import { useSelector } from 'react-redux'


export default function Example() {

const result = useSelector((state) => state.INPUTBAR)

console.log("result : ",result);


  return (
    <>
    <div>example</div>
    </>
  )
}
