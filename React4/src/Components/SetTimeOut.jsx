import { useState } from "react";

function SetTimeOut(){
    const [count,setCount] = useState(0);
    setTimeout(()=>{
        setCount(count+1);
    },2000)

    return(
        <div>
         <h1>counter : {count}</h1>
         {/*<button onClick={()=>{
            setTimeout(()=>{
                setCount(count+1)
            },2000)
         }}>click</button>*/}
        </div>
    )
}

export default SetTimeOut;