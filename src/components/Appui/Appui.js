import React from 'react'
import Button from '../button/Button'
import "./Appui.css"
import { useState } from "react";


function Appui(){

function Functions() {
  
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
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-4"></div>
        <div className='data'>
          <div className="titlebar">
            <h1 id="heading">Counter App</h1>
          </div>
          <div className="buttons">
            <Button title="-" className="btn-1" onClick={{decrementHandler}} />
            <span id="screen"> </span>
            <Button title="+" className="btn-2" onClick={{incrementHandler}}/>
            <br /><br />
            <Button title="Reset" className="btn-3" onClick={{resetHandler}}/>

          </div>
        </div>
        <div className="col-4"></div>

        <div>
          <Functions/>
        </div>
      </div>
    </div>
  )
}
 }

export default Appui