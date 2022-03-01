import React from 'react'
import Button from '../button/Button'
import "./Appui.css"
import { useState } from "react";


function Appui() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-4"></div>
        <div className='data'>
          <div className="titlebar">
            <h1 id="heading">Counter App</h1>
          </div>
          <div className="buttons">
            <Button title="-" className="btn-1" />
            <span id="screen"> </span>
            <Button title="+" className="btn-2" />
            <br /><br />
            <Button title="Reset" className="btn-3" />

          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  )
}

export default Appui