import React, { useState } from 'react'

const Test = () => {
    const [address,setAddress] = useState(" ")
  return (
    <div>
      <input onChange={()=>{console.log("hello")}} type='text' placeholder='Full Name'/>
      <input onChange={(e)=>{setAddress(e.target.value)}} type='text' placeholder='Address'/>
      <h2>Address : {address}</h2>
    </div>
  )
}

export default Test
