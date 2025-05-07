import { useState } from "react";
import useTimeFetch from "./hooks/useTimeFetch";

function App(){
  const [intervalTime,setIntervalTime] = useState(" ");
  const {data , loading ,error} = useTimeFetch()
  return(
    <div>
    <label>
        Interval time (ms):
        <input type="number" value={intervalTime} onChange={(e) => {
            setIntervalTime(Number(e.target.value))
        }} />
    </label>


    {loading && <h2>Loading ...</h2>}
    {error && <h2>Error : {error.message}</h2>}
    {data && (
        <div>
            <h1>ID : {data.id} </h1>
            <h2>{data.title}</h2>
        </div>
    )}
</div>

  )
}
export default App;