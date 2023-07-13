import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import RegistrationForm from './Registration';
import cl from './images/logo cloud.png'
import lady from './images/girl.png'
import log from './images/login.mp4'
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import UserLogout from './logout';
// import {useNavigate} from 'react-redux';
import {login,logout} from './features/user';

const Login = () => {
  const user=useSelector(state => state.user.value);
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [errors, setErrors] = useState({});
      
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform validation
        const validationErrors = {};
        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Please enter a valid email';
        }
        if (!password) {
          validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
          validationErrors.password = 'Password should be at least 6 characters long';
        }    

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, do something with the data (e.g., submit to a server)
            console.log('Login data:', {email, password });
            // Reset form
            setEmail('');
            setPassword('');
            setErrors({});
          } else {
            // Form is invalid, update the errors state
            setErrors(validationErrors);
          }
      };
  return (
    <>
    <div className="top1">
      <div className="container" >
        <div className='image'>
            <img src={lady} style={{height:'400px',width:'370px'}}></img>
        </div>
      <form >
        <div className='content'>
          <div className='head'>
      <h1>Login</h1>
      </div>
      <div className='inputt'>
        <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className='inputt'>
        <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
          />
          {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className='but'>
        <button onClick={()=> {dispatch(login({email}));navigate("/home")}} type="submit">Login</button>  
        </div>
        </div>
      <div className='reg'>
        <p>Don't have an account?
        <Link to="/register" class="nav-link" style={{color:'white'}}>Register here</Link></p>
      </div>
      </form>
      </div>
    </div>
      
    </>
  );
};

export default Login;