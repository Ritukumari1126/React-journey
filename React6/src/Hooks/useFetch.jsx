import { useEffect, useState } from "react";

function useFetch(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        fetch(url).then(async(response)=>{
            const result = await response.json();
            setData(result);
            /*if(!response.ok){
                throw new Error("Network Error")
            }
            return response.json()
            
        }).then((result)=>{
            setData(result);
            setError(null);*/
        }).catch(error=>{
            setError(error);
            setData(null);
        }).finally(()=>{
            setLoading(false)
        })
    },[url])

    return{data , error , loading};
}

export default useFetch;