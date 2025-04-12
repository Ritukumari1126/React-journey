import { useContext } from "react";

function Increase(){
    const {count,setCount} = useContext(CountContext)
    return(
        <div>
            <button onClick={()=> setCount(count-1)}></button>
        </div>
    )
}

export default Increase;