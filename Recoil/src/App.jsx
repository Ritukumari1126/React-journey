/*import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

const counter = atom({
  key:"counter",
  default:0
})





function App(){
 
  return(
    <div>
    <RecoilRoot>
    <Counter/>
    </RecoilRoot>
    </div>
  )
}
export default App

function Counter(){
  let count = useRecoilValue(counter);
  return(
    <div>
      <h1>{count}</h1>
      <br></br>
    <Button/>
    </div>
  )
}

function Button(){
  const setCount = useSetRecoilState(counter)

  return(
    <div>
    <button onClick={() => {
      setCount((c)=>c+1)
    }}>increase</button>
    <button onClick={() => {
      setCount((c)=> c-1)
    }}>decrease</button>
    </div>
  )
}*/

import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";


const counter = atom({
  key: "counter", 
  default: 0,    
});

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Button />
    </RecoilRoot>
  );
}

function Counter() {
  const count = useRecoilValue(counter);
  return (
    <div>
      <h1>{count}</h1>
      <br></br>
    </div>
  );
}

function Button() {
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
      <button onClick={() => setCount((c) => c - 1)}>decrease</button>
    </div>
  );
}

export default App;

