import React, { useState,useEffect } from 'react';
import './Registration.css'
import cl from './images/cloud.png'
import lady from './images/girl.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {login,logout} from './features/user';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const[loading,setLoading]=useState(false);
  const[content,addContent]=useState('')
  const[open,setOpen]=useState();
  
  useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
      addContent(response.data);
      
    });
  })

  const navigate=useNavigate();
  const handleNext=()=>{
    dispatch(login({email}));navigate('/home')
  }
  const validateForm = () => {
    const validationErrors = {};

    content.map((value) => {
      if (value.email === email) {
        validationErrors.email = "The Email Id already exists";
        console.log("The Email Id already exists");
      }
    });
  
    if (!name) {
      validationErrors.name = 'Please enter your name';
    }
    if (!location) {
      validationErrors.location = 'Please enter your Location';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
  
    setErrors(validationErrors);
  
    // Check if there are any validation errors
    return Object.keys(validationErrors).length === 0;
  };
  
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
  
    try {
      // Validate the form
      const isValid = validateForm();
  
      if (isValid) {
        const data = {
          name: name,
          email: email,
          location: location,
          password: password,
        };
        const response = await axios.post("http://localhost:8181/api/v1/auth/register", data);
        console.log("Registration Successful:", response.data);
        setLoading(false);
        alert("Registration Successfull");
        setName('');
        setEmail('');
        setLocation('');
        setPassword('');
        setConfirmPassword('');
        setErrors({});
        handleNext();
      } else {
        setLoading(false);
        alert("Please fix the form errors before submitting.");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <div className='back-grnd'>
      <div className='cont'>
        
        
    <form >
      <div className='content'>
        <div className='head'>
        <h2 style={{textAlign:'center'}}>Registration</h2>
        </div>
        <div className='inputtt'>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className='inputtt'>
        <input type="email"  placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className='inputtt'>
        <input type="text"  placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        {errors.location && <span className="error">{errors.location}</span>}
      </div>
      <div className='inputtt'>
        <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className='inputtt'>
        <input
          type="password"  placeholder="ConfirmPassword" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <div className='but'>
      <button type="button" onClick={handleSubmit}>Register</button>

      </div>
          </div>
    </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
