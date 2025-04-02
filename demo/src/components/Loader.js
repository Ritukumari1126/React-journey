import React, { useEffect, useState } from 'react'


const Loader = () => {
    const [load,setLoad] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>response.json())
        .then(response=>{
            const {body}=response
            setLoad(body)})
    },[])
  return (
    <div className='Loader'>
         {load?load : 'Loading...'}
      
    </div>
  )
}

export default Loader
