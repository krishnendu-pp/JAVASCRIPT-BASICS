import { useState } from 'react'
import './App.css'

function App() {
  const [input, SetInput] = useState('')

  return (
    <>
    <input type="text" onChange={(e)=>SetInput(e.target.value)
    } ></input>
    <h1>The  {input}</h1>
     
    </>
  )
}

export default App
