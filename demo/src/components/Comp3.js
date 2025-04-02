import Comp4 from "./Comp4";
import Comp5 from "./Comp5";

const Comp3 = function(props)
{
    console.log("comp3",props)
    return (
        <div>
        <p> name : {props.data3}</p>
        Comp3

        <Comp4  studentName = {{
            name: "ritu",
            age:"21",
            phone: "1234"
        }}/>
        <Comp5 name = "gita ajay"/>
        </div>
    )
}

export default Comp3;