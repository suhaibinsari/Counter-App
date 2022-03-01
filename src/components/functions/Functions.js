import { useState } from "react";
import Button from "../button/Button";



export default function Functions() {
  
 const [count, setCount] = useState(0)

 const incrementHandler = () =>{
   setCount(count+1)
 }

const decrementHandler = () =>{
setCount(count-1)
}

const resetHandler = () =>{
setCount(0)

}
return (
  <div style={{margin:20}}>
     
        <button onClick={decrementHandler}>-</button>
        <span style={{padding:10}}>{count}</span>
        <button onClick={incrementHandler}>+</button>
        <button style={{margin:12}} onClick={resetHandler}>Reset</button>
  </div>
)
}

