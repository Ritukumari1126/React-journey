import { useContext } from "react";

function Decrease(){
    const{count , setCount} = useContext(CountContext)
    return(
        <div>
        <MyCount/>
            <button onClick={()=> setCount(count -1)}></button>
        </div>
    )
}

function MyCount(){
    const{count} = useContext(CountContext)
    return(
        <div>
            count is : {count}
        </div>
    )
}

export default Decrease;