import { useState } from "react";


function App(){
  const [count,setCount]= useState(0);
  return(


    <div className="cont">
      <h1>{count}</h1>
      <button onClick={() => setCount(count +1)}>Increases
      </button>
      <button onClick={() => setCount(count -1)}>Decreases
      </button>
      <button onClick={() => setCount(0)}>Reset
      </button>
     

    </div>
  );

}

export default App