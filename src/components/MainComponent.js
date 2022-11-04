import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateValue } from '../redux/slices/inputBarSlice'

export default function MainComponent(props) {


  const[message, setMessage] = useState("")

  function handleChange(e){
     setMessage(e.target.value)
  }

  const dispatch = useDispatch()
  
  function btnClicked(){
    dispatch(updateValue({message, insden : props.insden}))
  }
  return (
    <div>
      <input type="text" placeholder = "message here" onChange={(e)=> setMessage(e.target.value)}/>
        <button onClick={()=> btnClicked()}>Click me</button>
    </div>
  )
}
