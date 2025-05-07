import { useState } from "react"
import { useFetch } from "./Hooks/useFetch"

function App(){
  const [button,setButton] = useState(1)
  
  const {data} = useFetch(`https://jsonplaceholder.typicode.com/todos/${button}`)
  return (
    <div>
      <button onClick={()=>{setButton(1)}}>1</button>
      <button onClick={()=>{setButton(2)}}>2</button>
      <button onClick={()=>{setButton(3)}}>3</button>

      {data &&  <h1>{data.title}</h1>}
    </div>
  )
}

export default App