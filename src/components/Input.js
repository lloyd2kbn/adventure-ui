import React from 'react'
import './Input.css'
function Input({className,placeholder,type}) {
  return (
    <input type="text" className={className} placeholder={placeholder} type={type}/>
  )
}

export default Input