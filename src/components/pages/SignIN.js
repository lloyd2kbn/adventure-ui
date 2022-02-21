import React from 'react'
import '../../App.css'
import {Button} from '../Button.js'
import Input from '../Input.js'
function SignIN() {
  return (
    <div className='sign-in'>
        <div className='form-container'>
            <h3 className='form-heading'>Classy Login Form</h3>
            <div className='input-container'>
                    <i className="fa-solid fa-user"></i><Input className='input-item' placeholder="Enter your username" type="text"/>
            </div>
            <div className='input-container'>
                <i className="fa-solid fa-lock"></i><Input className='input-item' placeholder="Enter your password" type="password"/>
            </div>     
            <Button buttonStyle="btn--primary" width="100%">Login</Button>
        </div>
    </div>
  )
}

export default SignIN