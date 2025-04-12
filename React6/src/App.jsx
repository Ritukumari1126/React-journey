import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./Hooks/useFetch";

function App(){
  /*const [button,setButton] = useState(1);
  const [data , setData] = useState(null);
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${button}`).then((response)=>{
      setData(response.data)})
      .catch(error=>{
        setError(error)
      })
      .finally(()=>{
        setLoading(false)
      })
    

  },[button])

  if(loading){
    <h1>loading</h1>
  }

  if(error){
    <p>error</p>
  }*/
 const [button,setButton] = useState(1)
 const {data , error ,loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${button}`)
 if(loading){
  <h1>loading..</h1>
 }

 if(error){
  <h1>error</h1>
 }
  return (
    <div>
    <button onClick={()=>{
      setButton(1)
    }}>1</button>
    <button onClick={()=>{
      setButton(2)
    }}>2</button>
    <button onClick={()=>{
      setButton(3)
    }}>3</button>
      {data && <p>{data.title}</p>}
      hello
    </div>
  )
}
export default App;