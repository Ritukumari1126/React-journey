import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

function useTimeFetch(baseUrl,intervalTime){
    const [todoId,setTodoId] = useState(0);
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchData = useCallback(async()=>{
        if(todoId>100) return;
        setLoading(true)

        try{
            const response = await axios.get(`${baseUrl}/${todoId}`);
            setData(response.data);

        }
        catch(err){
            setError(err);
        }
        finally{
            setLoading(false)
        }
    },[baseUrl,todoId])

    useEffect(()=>{
        fetchData();
    },[todoId,fetchData])

    useEffect(()=>{
        if(todoId>100) return;

        const intervalId = setInterval(()=>{
            setTodoId((prevId)=>{
                if(prevId<100) return prevId +1;

            })
        },intervalTime)
        return () => clearInterval(intervalId);
    },[intervalTime,todoId])
    return {data , loading ,error}

}

export default useTimeFetch;