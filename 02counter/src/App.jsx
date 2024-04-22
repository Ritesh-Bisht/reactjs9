import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

 // let counter =15 
  const addValue = ()=>{
    console.log('Value Added',counter);
     counter++;
    setCounter(counter)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
    <h1>CHAI AUR REACT </h1>
    <h2>COUNTER VALUE : {counter} </h2>

   
    <button 
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value {counter} </button>
      
    </>
  )
}

export default App
