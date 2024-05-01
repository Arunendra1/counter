import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // let [counter,setCounter] =useState(5)
    const [counter,setCounter]=useState(5);
   
     
   const addvalue=()=>{
   console.log("clicked ", counter)
  //  counter=counter+1;
    //  setCounter(counter)
    if(counter<20){
      // setCounter(counter=>counter+1)
    setCounter(counter+1);
    }
    else{
      alert("Cannot increase counter beyond 20")
    }
   }

  const decreasevalue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }else{
      alert("Cannot decrease counter below 0");
    }
  }
  return (
    
    <div class="div">
      <h1>Chai or react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add Value </button>
      <br/>
      <button onClick={decreasevalue}>remove Value</button>
     
    </div>
  )
}

export default App
