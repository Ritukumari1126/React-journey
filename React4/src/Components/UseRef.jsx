import { useEffect, useRef, useState } from "react"

function UseRef(){
    const [value,setValue] = useState(0);
    const count = useRef(0);
    const inputEle = useRef();

    const btnclicked = ()=>{
        console.log(inputEle);
        inputEle.current.style.background = "blue";
    }

    

    useEffect(()=>{
       count.current = count.current +1;
    })

    return (
        <div>
            <button onClick={()=>{setValue(prev => prev+1)}}>+1</button>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(prev => prev-1)}}>-1</button>
            <h1> render :{count.current}</h1>

            <input type="text" ref={inputEle}/>
            <button onClick={btnclicked}>click here</button>
        </div>
    )
}

export default UseRef;