import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import './Login.css';
import RegistrationForm from './Registration';
import cl from './images/logo cloud.png'
import lady from './images/girl.png'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import UserLogout from './logout';
import {login,logout} from './features/user';

function Login(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const user=useSelector(state => state.user.value)
  const[content,addContent]=useState([]);
  const[errors,setErrors]=useState("");
  useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
      addContent(response.data);
    })
  });
  
  
  const handleNext=()=>{
    dispatch(login({email}));navigate("/")
  }
  
  const handleChange = async(e) => {
    e.preventDefault();
  try{
  const response = await axios.post(
    'http://localhost:8181/api/v1/auth/authenticate',
    {
      email,
      password
    });
    handleNext();
    let token = response.data.token;
    let user = response.data.userResponse;
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
  }
  catch(error){
    console.error('Error:',error);
  }
  if(email.length !== 0 && (/$^|.+@.+..+/).test(email) && password.length >= 8){
      handleNext();
  }
  };
  return (
    <>
    <div className="top1">
      <div className="container" >
      <form >
        <div className='content'>
          <div className='head'>
      <h1>Login</h1>
      </div>
      <div className='inputt'>
      <input type="text" value={email} placeholder="Email" name="email" required onChange={e=>setEmail(e.target.value)}/>
        <span style={{color:"red"}}>{email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Enter a valid email" : ""}</span>
        </div>
        <div className='inputt'>
        <input type="password" placeholder="Password" name="password" required onChange={e=>setPassword(e.target.value)}/>
          </div>
          <div className='but'>
        <button onClick={handleChange} type="submit">Login</button>  
        </div>
      <div className='reg'>
        <p>Don't have an account?
        <Link to="/register" class="nav-link" style={{color:'black'}}>Register here</Link></p>
      </div>
        </div>
      </form>
      </div>
    </div>
      
    </>
  );
};

export default Login;
// import React,{useState,useEffect} from 'react';
// import './train login page.css';
// import { Link,useNavigate } from 'react-router-dom';
// import Typewriter from "typewriter-effect";
// import { useDispatch } from 'react-redux';
// import {login,logout} from './features/user';

// import {useSelector} from 'react-redux';
// import Navbar from './homepage';
// import axios from 'axios';
// const Login_page = () => {
//   const dispatch=useDispatch();
//   const navigate=useNavigate();
//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const user=useSelector(state => state.user.value)
//   const[content,addContent]=useState([]);
//   const[errors,setErrors]=useState("");
//   useEffect(()=>{
//     axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
//       addContent(response.data);
//     })
//   });
  
  
//   const handleNext=()=>{
//     dispatch(login({email}));navigate("/")
//   }
  
//   const handleChange = async(e) => {
//     e.preventDefault();
//   try{
//   const response = await axios.post(
//     'http://localhost:8181/api/v1/auth/authenticate',
//     {
//       email,
//       password
//     });
//     handleNext();
//     let token = response.data.token;
//     let user = response.data.userResponse;
//     localStorage.setItem('token',token);
//     localStorage.setItem('user',JSON.stringify(user));
//   }
//   catch(error){
//     console.error('Error:',error);
//   }
//   if(email.length !== 0 && (/$^|.+@.+..+/).test(email) && password.length >= 8){
//       handleNext();
//   }
//   };
      
   
//   return (
//     <>
    
//     <div className="top1">
        
//       <div className="s1">
//             <Typewriter
//                 onInit={(typewriter) => {
//                     typewriter
//                         .typeString("Travel On")
//                         .pauseFor(1000)
//                         .deleteAll()
//                         .typeString("Welcomes You!!!")
//                         .deleteAll()
//                         .typeString("Start You Journey")
//                         .deleteAll()
//                         .typeString("Life is short, and the world is wide!!!")
//                         .start();
//                 }}
//             />
//         </div>
//       <div className="container" >
//       <form>
//       <h1>Login</h1>
      
//         <input type="text" value={email} placeholder="Email" name="email" required onChange={e=>setEmail(e.target.value)}/>
//         <span style={{color:"red"}}>{email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Enter a valid email" : ""}</span>
//         <input type="password" placeholder="Password" name="password" required onChange={e=>setPassword(e.target.value)}/>

//         <Link to="/" style={{color:'white'}} > <button type="submit" onClick={handleChange}>Login</button></Link>
//       <Link to='/train reg page' style={{color:'orange'}}>Don't have an account? Register</Link>
//       <br></br>
//       <Link to='/train admin login page' style={{color:'orange'}}>Admin Login</Link> 
     
//         {/* {!email.name?
//           <button onClick={()=> dispatch(login({email})
//           )}>Login</button>:
//         <button onClick={()=> dispatch(logout()
//           )}>Logout</button>} */}
//         {/* <Link to="/" style={{color:'white'}} ><button type="submit">Login</button></Link> */}
//       </form>
//       </div>
//     </div>

//     </>
//   );
// };

// export default Login_page;


