import { useState,useMemo} from "react";

function UseMemo(){
    const [number,setNumber] = useState(0);
    const [counter,setCounter] = useState(0);

    function cubeNum(num){
        console.log('calculation done..')
        return Math.pow(num,3);
    }

    //const result = cubeNum(number);

    const result = useMemo(()=> cubeNum(number),[number])
    return(
        <>
        <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>

        <h1>cube of the number {result}</h1>
        <button onClick={()=>{setCounter(prev => prev+1)}}>+1</button>
        <h1>counter: {counter}</h1>
        </>
        

    )
}

export default UseMemo;