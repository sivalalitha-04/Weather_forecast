// import React, { useState,useEffect } from 'react';
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './images/home.png';
import rep from './images/report.png'
import cloud from './images/cloudy.png'
import ab from './images/about.png'
import logo from './images/wea-logo.png'
import './World.css';
import { worldWeather } from './data';
import Navbar from './Navibar';
import axios from 'axios';

export default function World(){

  const[selop,setSelop]=useState([])
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8181/world/get")
    .then((resp) => {
      setSelop(resp.data);
    })
  },[]);

  const addSelectedOption = () => {
    // Check if the selected value is not already in the list
    if (!selectedOptions.find((option) => option.counName === selectedValue)) {
      const selectedOption = selop.find((op) => op.counName === selectedValue);
      setSelectedOptions((prevOptions) => [
        ...prevOptions,
        { counName: selectedValue, descrip: selectedOption.descrip, info: selectedOption.info  }
      ]);
    }
  };
  
  const removeOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption.counName !== option.counName)
    );
  };


    return (
        <div>
      <div className='world_back-grnd'>
        <div className='world_'>
        <Navbar/>
        <h1 style={{fontSize:'45px',padding:'30px'}}>WorldWeather</h1>
                <div className='input-b'>
                    <div className='input-bar'>
                    <select
  placeholder="Select"
  style={{ width: '10%', float: 'left', height: '5vh', borderRadius: '10px' }}
  value={selectedValue}
  onChange={(e) => {
    const selectedOption = selop.find((op) => op.counName === e.target.value);
    setSelectedValue(e.target.value);
    setSelectedDescription(selectedOption ? selectedOption.descrip : '');
  }}
>
  <option value="" disabled>
    Select an option
  </option>
  {selop.map((ww) => (
    <option key={ww.counName} value={ww.counName}>
      {ww.counName}
    </option>
  ))}
</select>
<div className='worbut'>
        <button onClick={addSelectedOption}>Add</button>
</div>
        </div>
        </div>
          <h3></h3>
          <ul>
  {selectedOptions.map((option) => (
    <div className="w-sep" key={option.counName}>
      <div className="w-cont">
        <li>
          <h1>{option.counName} - {option.info}</h1>
          <p>{option.descrip}</p>
        </li>
      </div>
      <div className="ed-but">
        <button
          onClick={() => removeOption(option)}
          style={{
            borderRadius: '30px',
            backgroundColor: 'rgb(9, 27, 43)',
            width: '40%',
            color: 'white',
            height: '60px',
          }}
        >
          Remove
        </button>
      </div>
    </div>
  ))}
</ul>

      </div>
      </div>
      </div>
    );
}