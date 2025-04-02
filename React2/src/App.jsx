import { useState } from "react";

function App(){
  const [isLightOn,setIsLightOn] = useState(false)

  let toggle = () => {
    setIsLightOn((prev)=> !prev)
  }

  
  return (
    <div>
    <Room isLightOn={isLightOn} toggle={toggle}/>
    </div>
  )
}

function IsLight({isOn}){
  return (
    <div>
    <p> light is on {isOn ? 'on' : 'off'} </p>
    </div>
  )

}

function ToggleButton({toggle}){
  return (
    <div>
    <button onClick={toggle}>on the light</button>
    </div>
  )
}

function Room({isLightOn , toggle}){

  return(
    <div>
    <IsLight isOn = {isLightOn}/>
    <ToggleButton toggle={toggle}/>
    </div>
  )
}

export default App;
