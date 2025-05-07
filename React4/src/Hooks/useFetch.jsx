import { useEffect, useState } from "react";

function useFetch(url){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        fetch(url).then(async(res)=>{
            const json = await res.json();
            //setCount(json)
            setTimeout(()=>{
                setCount(json)
            },1000)
                
            
        }).catch(err=>{
            console.log(err);
        })
       
    },url)
    return{count}
        
       
    
}

export default useFetch;