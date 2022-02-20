import React from 'react'
import '../../App.css'
import {Button} from '../Button.js'
import Input from '../Input.js'
function SignUp() {
  return (
            <div className='sign-up'>
                <div className='form-container'>
                      <h3 className='form-heading'>Classy Register Form</h3>
                      <div className='input-container'>
                            <i className="fa-solid fa-user"></i><Input className='input-item' placeholder="Enter your username" type="text"/>
                      </div>
                      <div className='input-container'>
                          <i className="fa-solid fa-lock"></i><Input className='input-item' placeholder="Enter your password" type="password"/>
                      </div>
                      <div className='input-container'>
                          <i className="fa-solid fa-lock"></i><Input className='input-item' placeholder="Enter your repeat password" type="password"/>
                      </div>
                      <div className='forgot-container'>
                          <div>
                              <input type="checkbox" />
                              <span>Remember me</span>
                          </div>
                          <span>Forgot-password?</span>
                      </div>
                      <Button buttonStyle="btn--outline" width="100%">Register</Button>
                </div>
            </div>
  )
}

export default SignUp