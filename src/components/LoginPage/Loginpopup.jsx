import React from 'react'
import './Loginpopun.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrState]= useState("Login")

  return (
    <div className='Login-popup'>
    <form className="Login-popup-container">
        <div className="Login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.close_icon} alt='X'/>
        </div>
        <div className='Login-popup-inputs'>
              {currState==="Login"?<></>: <input type="text" placeholder="your name" required /> }
              <input type="email" placeholder='Your Email' required/>
              <input type="password" placeholder='Your Password' required/>

          </div>

          <button>{currState=="Sign Up"?"create accoun" :"Login"}</button>
          <div className="Login-popup-condition">
            <input type="checkbox" required/>
            <p>By Continuing, i agree to the terms of the use & privacy policy</p>
          </div>
          {currState==="Login"
          ?<p>Create a new account? <span  onClick={()=>setCurrState("Sign up")}>Click here</span></p>:
          <p>Already have an Account?<span onClick={()=>setCurrState("Login")}>Login</span></p>
          }
    </form>
    </div>
  )
}

export default Loginpopup;