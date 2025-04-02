import { useState } from "react";

function Home(){
   const [isLoading,setLoading] = useState(true)

    return(
        <div>
        <h>conditional rendering</h>
        {10>1 && <h1>ritu classes</h1> }
        {isLoading && <h1>hello</h1>}

        {isLoading && <div>
        <h2>abhirit</h2>
        <h1>abhinav kunwar</h1>

            
        </div>}
        <button onClick={()=>{setLoading(!isLoading)}}>{isLoading ? 'hide' :'show' }</button>
        {
            10<5 ? <div>
            <h1>hello rituabhi</h1>
            <h1>hello abhirit</h1>
            </div>
            :
            <h1>byy</h1>
        }

       
        </div>
    )
}

export default Home;