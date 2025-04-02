import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

const Comp1 = (props)=>{
    console.log("comp1", props)
    return (
        <div>
        <h1> data: {props.data}</h1>
        Comp1
        <Comp2 data2 = {props.data}/>
        <Comp3 data3 = {props.data}/>
        </div>
    )
}

export default Comp1;