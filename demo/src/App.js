import { useState } from "react";
import Comp1 from "./components/Comp1";
import Header from "./components/Header";
import Student from "./components/Student";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Test from "./components/Test";


const App = ()=>{
  const clickHandler = ()=>{
    console.log("ajay gita")
     
  }
  const clickHere = (x)=>{
    console.log("clicked by ",x)
  }

  //var data1 = 0;
  const [data1,setData] = useState(0)
  const [Name,setName] = useState("ritu")

  

  //const fname = "abhirit";

  const data = {
    name : 'rituabhi',
    email:'abhirit@gmail.com',
    phone:'1234'
  }
    
  return (
    <div>
    {<h1>Hello ritu</h1>
    <Header></Header>
    <p></p>
    <Header></Header>
    

    <Student studentData = {data}/>
    <Student studentData = {{
      name : 'rituabhinav',
      email:'abhirit@gmail.com',
      marks:'482',
      phone:'1234'
    }}> <button>view more details</button></Student> 
    


    <Comp1 data = "ritu poddar"/>

    <button onClick={()=>{ console.log("hello ritu")}}>click here </button>
    <button onClick={clickHandler}>viwe more </button>   
    <button onClick={()=>{clickHere("ritu")}}>ritu</button>
    <button onClick={()=>{clickHere("abhinav")}}>abhinav</button>
    <h1>{data1}</h1>
    <button onClick={()=>{
      const x = data1 + 1;
      setData(x )
      console.log(data1)}}>increment</button>
      <h1> name: {Name}</h1>

      <button onClick={()=>{setName("abhirit")}}>change name</button>
      <Home/>
      <Loader/>}

      <Test/>
  
    </div>
    
   
  )
}

export default App;