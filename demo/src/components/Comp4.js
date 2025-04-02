const Comp4 = function(props)
{
    console.log(props)
    return (
        <div>
        Comp4
        <h1>name: {props.studentName.name} </h1>
        <h1>age: {props.studentName.age}</h1>
        </div>
    )
}

export default Comp4;