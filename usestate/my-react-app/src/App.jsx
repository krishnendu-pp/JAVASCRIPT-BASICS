import { useState } from "react";
import './App.css'

function App() {
  const f =["aa","bb","cc"];
  

  return (
    <>
    
  {  f.map((i,index)=> (<h1 key ={index}> {i}</h1>))}


    
    </>
  ) 
}

export default App