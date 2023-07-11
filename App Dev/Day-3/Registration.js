import React, { useState } from 'react';
import './Registration.css'
import im from './images/img-sid.png'
import cl from './images/cloud.png'
import lady from './images/girl.png'

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const validationErrors = {};
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

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, do something with the data (e.g., submit to a server)
      console.log('Registration data:', { name, location, email, password });
      // Reset form
      setName('');
      setEmail('');
      setLocation('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    } else {
      // Form is invalid, update the errors state
      setErrors(validationErrors);
    }
  };

  return (
    <div className='back-grnd'>
      <div className='cont'>
        <div className='title'>
          <h1>Weather Forecast</h1>
        </div>
        <div className='image'>
        <img src={lady} style={{height:'400px',width:'370px'}}></img>
        </div>
    <form onSubmit={handleSubmit}>
      <div className='content'>
        <div className='head'>
        <h2>Registration</h2>
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
      <button type="submit">Register</button>
      </div>
          </div>
    </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
