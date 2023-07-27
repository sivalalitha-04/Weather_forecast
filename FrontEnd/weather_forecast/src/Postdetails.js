import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Postdetails.css'
import { Navigate} from 'react-router-dom';
import Adminnav from './Adminnav';

export default function PostDetails(){
    const [inputData,setInputData]=useState({});

    const handleChange=(e)=>{
        e.preventDefault();
        const {id,value}=e.target;
        setInputData({...inputData,[id]:value});
        console.log(inputData);
    }

    const handleSubmit = () => {
        axios.post("http://localhost:8181/post/details", inputData);
          window.location.reload();
          
      };
    return(
        <>
        <div className='adpostbg'>
            <div className='adpostbrng'>
                <Adminnav/>
                <div className='postcont'>
                <div className='padpost'>
                <div className='post'>
                    <table>
                        <tbody>
                            <h2>CityDetails</h2>
                            <tr>
                                <th style={{paddingLeft:'2rem'}}>CityName<input type='text' placeholder='CityName' id="cityName" onChange={handleChange}/></th>
                                <th style={{paddingLeft:'2rem'}}>Pincode<input type='text' placeholder='Pincode' id="pincode" onChange={handleChange}/></th>
                                <th style={{paddingLeft:'2rem'}}>GeoCoordinates<input type='text' placeholder='Geocoordinates' id="geoCoord" onChange={handleChange}/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className='padpost'>
                <div className='post'>
                    <table>
                        <tbody>
                            <h2>Date And Time</h2>
                            <tr>
                                <th style={{paddingLeft:'10rem',paddingRight:'8rem'}}>Date<input type='date' placeholder='Date' id="date" onChange={handleChange}/></th>
                                <th style={{paddingLeft:'10rem',paddingRight:'8rem'}}>Time<input type='time' step="2" placeholder='Time' id="time" onChange={handleChange}/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className='padpost'>
                <div className='post'>
                    <table>
                        <tbody>
                            <h2>Temperature</h2>
                            <tr>
                                <th style={{paddingLeft:'9rem',paddingRight:'7rem'}}>Celsius<input type='text' placeholder='Celsius' id="cel" onChange={handleChange}/></th>
                                <th style={{paddingLeft:'7rem',paddingRight:'7rem'}}>Fahrenheit<input type='text' placeholder='Fahrenheit' id="fah" onChange={handleChange}/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className='padpost'>
                <div className='post'>
                    <table>
                        <tbody>
                            <h2>Disaster</h2>
                            <tr></tr>
                            <th style={{paddingLeft:'15rem'}}>Type of Disaster<input type='text' placeholder='Disaster' id='disVal'onChange={handleChange}/></th>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className='padpost'>
                <div className='psep'>
                <div className='spost'>
                    <table>
                        <tbody>
                            <h2>SunInfo</h2>
                            <tr>
                      <td>
                        <h3>Sunsky</h3>
                        <p>From</p>
                        <input type='time' step="2" id='sr' onChange={handleChange} />
                        <p>To</p>
                        <input type='time' step="2" id='ss' onChange={handleChange} />
                      </td>
                      <td>
                        <h3>Nightsky</h3>
                        <p>From</p>
                        <input type='time' step="2" id='ns' onChange={handleChange} /><break></break>
                        <p>To</p>
                        <input type='time' step="2" id='ne' onChange={handleChange} />
                      </td>
                    </tr>
                            </tbody>
                    </table>
                </div>
                </div>
                <div className='psep'>
                <div className='dpost'>
                    <table>
                        <tbody>
                            <h2>LocationInfo</h2>
                            <tr style={{paddingTop:'2rem'}}><tc>Precipitation</tc><tc style={{paddingLeft:'4rem'}}><input type="text" placeholder='Precipitation' id="precip"onChange={handleChange}/></tc></tr>
                            <tr style={{paddingTop:'2rem'}}><tc>Humidity</tc><tc style={{paddingLeft:'5.5rem'}}><input type="text" placeholder='Humidity' id="hum"onChange={handleChange}/></tc></tr>
                            <tr style={{paddingTop:'2rem'}}><tc>Visibility</tc><tc style={{paddingLeft:'5.8rem'}}><input type="text" placeholder='Visibility' id="visibility"onChange={handleChange}/></tc></tr>
                            <tr style={{paddingTop:'2rem'}}><tc>WindSpeed</tc><tc style={{paddingLeft:'4.4rem'}}><input type="text" placeholder='WindSpeed' id="windSpeed"onChange={handleChange}/></tc></tr>
                            <tr style={{paddingTop:'2rem'}}><tc>WindDirection</tc><tc style={{paddingLeft:'3rem'}}><input type="text" placeholder='WindDirection' id="windDir"onChange={handleChange}/></tc></tr>
                             </tbody>
                    </table>
                </div>
                </div>
                <div className='postbut'>
                {/* <Link to="/adhome"> */}
                    <button onClick={handleSubmit}>Post</button>
                    {/* </Link> */}
                </div>
                </div> 
                </div>
            </div>
        </div>
        </>
    )
}
