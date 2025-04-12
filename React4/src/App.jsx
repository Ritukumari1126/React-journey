import { useEffect, useState } from "react";

function App(){
  const [data,setData] = useState(null);
  const [button,setButton] = useState(null)
  const [loading,setLoading] = useState(true)
  const[error,setError] = useState(null);
  
  useEffect(()=>{
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${button}`).then(async(res)=>{
      const result = await res.json();
      setData(result);
      

    }).catch(err=>{
      setError(err);
    }).finally(()=>{
      setLoading(false)
    })
  },[button])
  return(
    <div>
      <button onClick={()=>{setButton(1)}}>1</button>
      <button onClick={()=>{setButton(2)}}>2</button>
      <button onClick={()=>{setButton(3)}}>3</button>
      <button onClick={()=>{setButton(4)}}>4</button>

      {loading?  "Loading.." : data.body}
      
    </div>
  )
}

export default App;