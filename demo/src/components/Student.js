import Marks from "./Marks";

const Student = (props)=>{    // props is an object 
    console.log(props)
    return (
        <div>
        <h1>{props.studentData.name}</h1>
        <p> Email : {props.studentData.email}</p>
        <p>{props.phone}</p>
        {props.children}
        <Marks  marks ={props.studentData.marks}/>
        

        
        </div>
    )
}

export default Student;