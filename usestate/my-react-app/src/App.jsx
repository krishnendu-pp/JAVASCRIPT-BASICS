import { useState } from "react";
import './App.css'

function App() {
  const [input1,SetInput1] = useState('')
  const [input2,SetInput2] = useState('')
  const [text,SetText]=useState('Hello')

  return (
    <>
    <div className='text'>
      <p>{text}</p>
      <button onClick={()=>SetText("Welcome")}>Click</button><br />
    </div>
    <br /><br />
    <form>

      <label>Name: </label><input type="text" onChange={(e)=>SetInput1(e.target.value)}></input>
      <label>Email: </label><input type="email" onChange={(e)=>SetInput2(e.target.value)}></input>
      <h4>Name: {input1}</h4>
      <h4>Email: {input2}</h4>

    </form>
    
    </>
  ) 
}

export default App