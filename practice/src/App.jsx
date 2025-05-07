import { useState } from "react"

function App(){
  const [counter,setCounter] = useState(1)
  return(
    <div>
    <h1>{counter}</h1>
      <button onClick={()=>{setCounter(counter +1)}}>increment</button>
      <button onClick={()=>{setCounter(counter -1)}}>decrement</button>
    </div>
  )
}

export default App