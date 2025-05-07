import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import SetTimeOut from "./Components/SetTimeOut";
import UseRef from "./Components/UseRef";
import UseMemo from "./Components/UseMemo";
import useTimeFetch from "./Hooks/useTimeFetch";

function App(){
  /*const [data,setData] = useState(null);
  const [button,setButton] = useState(null)
  const [loading,setLoading] = useState(true)
  const[error,setError] = useState(null);*/
  
 /* useEffect(()=>{
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${button}`).then(async(res)=>{
      const result = await res.json();
      setData(result);
      

    }).catch(err=>{
      setError(err);
    }).finally(()=>{
      setLoading(false)
    })
  },[button])*/

  const {count} = useFetch("https://jsonplaceholder.typicode.com/posts/1" )

  const [intervalTime,setIntervalTime] = useState(2000); 

  const {data , loading , error} = useTimeFetch("https://jsonplaceholder.typicode.com/todos" , intervalTime);

  
  return(
    <div>
      {/*<button onClick={()=>{setButton(1)}}>1</button>
      <button onClick={()=>{setButton(2)}}>2</button>
      <button onClick={()=>{setButton(3)}}>3</button>
      <button onClick={()=>{setButton(4)}}>4</button>

      {loading?  "Loading.." : data.body}*/}
      {loading ? "Loading " : count.title}
      

      {/*<SetTimeOut/>
      <UseRef/>
      <UseMemo/>*/}

      <label>
        Interval Time ms:
        <input type="Number" value={intervalTime} onChange={(e)=>{setIntervalTime(Number(e.target.value))}}/>
      
      </label>

      {loading && <h2>loading..</h2>}
      {error && <h2>error :{error.message}</h2>}
      {data && <h1>data:{data.title}</h1>}


      
    </div>
  )
}

export default App;