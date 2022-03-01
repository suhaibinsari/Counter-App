import React from 'react'
// import { useState } from "react";


function Button(props) {
  return (
    <button className={props.className}>{props.title || 'Default Button'}</button>
  )
}

export default Button