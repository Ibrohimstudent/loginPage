import React, { useState } from 'react'
import "./Register.css"
import "../../App.css"
import { Link,Link } from 'react-router-dom'
// import our Assets
import video from "../../LoginAssets/2909914-uhd_3840_2024_24fps.mp4"
import logo from "../../LoginAssets/erasebg-transformed.png"

//Imported Icons
import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"
import {MdMarkEmailRead} from "react-icons/md"
const Register = () => {

  // UseState to hold our inputs
  const [email,setEmail] = useState('')
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')

  //Onclick let us get what the user has entered

  const createUser = ()=>{
    //We shall require Axios to create an API that connects  to the server - 
    // Lets install that
  }
  return (
    <div className='registerPage flex'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create a Sell Extraordinary Products</h2>
            <p>Adopt coffee making</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account</span>
            <Link to={"/"}>
            <button className="btn">Login</button>
            </Link>
          </div>

        </div>

        <div className="formDiv flex">  
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className='form grid'>
          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="input flex">
              <MdMarkEmailRead className="icon"/>
              <input type="email" id='email' placeholder='Enter Email'
              onChange={(e)=>{
                setEmail(e.target.value)
              }} />
            </div>
          </div>
          <div className="inputDiv">
                      <label htmlFor="username">Username</label>
                      <div className="input flex">
                        <FaUserShield className="icon"/>
                        <input type="text" id='username' placeholder='Enter Username'
                         onChange={(e)=>{
                          setUserName(e.target.value)
                        }} />
                      </div>
          </div>
           <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <BsFillShieldLockFill className="icon"/>
              <input type="password" id='password' placeholder='Enter Password'
               onChange={(e)=>{
                setPassword(e.target.value)
              }} />
            </div>
          </div>
          <button type='submit' className='btn flex'>
            <span>Register</span>
            <AiOutlineSwapRight className='icon'/>
          </button>

          <span className="forgotPassword">
            Forgot your password? <a href="">Click Here</a>
          </span>
          </form>
         
        </div>
      </div>

    </div>
  )
}

export default Register