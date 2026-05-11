import { useState } from 'react';
import './App.css';

function App(){
const [count,setCount]=useState(0)
return(
  <>

    <br /><br /> <div className="back">
    <h1><strong> Counter :  {count} times</strong>  </h1>
        <div className='first'>
          <button onClick={()=>setCount(count+1)}>Increase</button><br /><button onClick={()=>setCount(count-1)}>Decrease</button><br />
          <button onClick={()=>setCount(0)}>Reset  </button>
        </div>
        
  </div>


  </>
)
}
export default App