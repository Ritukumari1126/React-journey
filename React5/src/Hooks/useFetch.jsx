import { useEffect } from "react";
import { useState } from "react"

export function useFetch(url){
    const [data,setdata] = useState(null);
    
    useEffect(()=>{
        fetch(url).then(async(res)=>{
            const json = await res.json();
            setdata(json)
        }).catch((err)=>{
            console.log(err);
        })

    },[url])
    return {data}
}