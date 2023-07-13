import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './Home.css'
import {useSelector} from 'react-redux';
import UserLogout from "./logout";
import cl from './images/logo cloud.png'
import cloud from './images/cloudy.png'
import wor from './images/world.png'
import cust from './images/custom.png'
import loc from './images/report.png'
import pro from './images/profile.png'
import cs from './images/cloud-s.png'
import out from './images/out.png'
import run from './images/run.png'
import fly from './images/flight.png'
import dr from './images/dr.png'
import he from './images/he.png'
import { dayWeather, worldWeather } from './data';
import { weekWeather } from './data';
import user from './features/user';
// import ImageSlider from './backslider';

function Home(){

        const user=useSelector(state => state.user.value)
    return ( 
        <div className='home_back-grnd'>
            <div className='home_'>
            <div className='home_cont'>
            <div className='imag'>
                    <img src={cloud} className='logo' style={{width:'40px'}} alt='icon'></img></div>
                    <div className='links'>
                    
                    {!user.email?
                     <Link to='/login'><img src={pro} style={{width:'30px',paddingLeft:'80%'}}></img></Link>:
                    <ul  id="navbar">
                     <li><Link to='/world'><img src={wor} style={{width:'40px'}}></img></Link></li>
                     <li><Link to='/report'><img src={loc} style={{width:'40px'}}></img></Link></li>
                     <li><p style={{color:'white'}}>{user.email}  <UserLogout/></p></li>
                    </ul>
                    }
                    
                    </div>
                {/* <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
                </div> */}
            </div>
            {user.email?
        <div className='search-b'>
        <div className="search-bar">
            <div className='s-b'>
            <div className='sep'>
      <select style={{borderRadius:'20px',height:'35px',boxShadow:'1px 1px 1px 1px black'}} >
        <option value="city_name">Places</option>
        <option value="pincode">Pincode</option>
        <option value="geo_coord">Geo-Coordinates</option>
      </select>
    </div>
                <div className='sep'>
            <input type="text" placeholder="Search..." />
            <button type="submit" className='search-but'>
                <i className="fas fa-search"></i>
            </button>
            </div>
            </div>
            <div className='date-in'>
                <div className='sep'>
                <input type='date'></input>
                </div>
                <div className='sep'>
                <input type='text' style={{width:'40px'}} placeholder='time'></input>
                </div>
                <div className='sep'>
                <button type='submit' className='search-but'>Show Weather</button>
                </div>
            </div>
        </div>
        </div>:<h1></h1>
        }
        <div className='details'>
            <div className='desc'>
            <h3>Madurai,TN</h3>
            <img src={cs} style={{width:'70px'}}></img>
            <h3>Cloudy</h3>
            </div>
            <div className='temp'>
                <h1>29°c</h1>
            </div>
        </div>
        <div>
        <div className='hour-det'>
               <h1  style={{color:'white',backgroundColor:'rgba(9, 27, 43,0.7)',borderRadius:'10px',padding:'10px'}}>Hourly Forecast</h1>
            <div className='hourly'>
                {dayWeather.map((dayWeather) => (
                    <div className='sep'>
                    <div className='h_det'>
                        <p>{dayWeather.time}</p>
                        <img src={dayWeather.img} style={{width:'48px'}}></img>
                        <p>{dayWeather.temp}</p>
                    </div>
                    </div>
                ))}
                <div className='pad-ext'>
                <div className='hour-ext'>Upto 24 hours</div></div>
            </div>
        </div>
        <div className='d-rep'>
            
        <div className='day-det'>
            <h1  style={{color:'white',width:'97%',backgroundColor:'rgba(9, 27, 43,0.7)',borderRadius:'10px',padding:'10px'}}>Weekly Forecast</h1>
            <div className='dayly'> 
                {weekWeather.map((weekWeather) => (
                    <div className='d-sep'>
                    <div className='d-con'>
                            <div class="day">
                            <div>{weekWeather.date}</div>
                            <div>{weekWeather.day}</div>
                            </div>
                        <div class="info">
                            <div className='p1'>
                            <p>Temperature: {weekWeather.tem}°C<img src={weekWeather.imt} style={{width:'25px'}}></img></p>
                            <p>Humidity: {weekWeather.hum}% <img src={weekWeather.imh} style={{width:'25px'}}></img></p>
                            <p>Wind Speed: {weekWeather.wis}km/hr<img src={weekWeather.ims} style={{width:'25px'}}></img></p>
                            </div>
                            <div className='p2'>
                                <p>Precipitation: {weekWeather.prep}% <img src={weekWeather.imp} style={{width:'25px'}}></img></p>
                                <p>  Visibility: {weekWeather.visi}m <img src={weekWeather.imv} style={{width:'25px'}}></img></p>
                                <p>  WindDirection: {weekWeather.wid}m <img src={weekWeather.imd} style={{width:'25px'}}></img></p>
                            </div>
                        </div>  
                    </div>
                </div>
                ))}
            </div>
            <div className='dis'>
                <h1 style={{color:'white',width:'97%',backgroundColor:'rgba(9, 27, 43,0.7)',borderRadius:'10px',padding:'10px'}}>Disaster Alert</h1>
                <p style={{color:'white',width:'97%',backgroundColor:'rgba(9, 27, 43,0.7)',borderRadius:'10px',padding:'10px'}}>None</p>
                </div>
        </div>
        </div>
        <div className='ind'>
                <h1 style={{color:'white',backgroundColor:'rgba(9, 27, 43,0.7)',borderRadius:'10px',padding:'10px'}}>Indices</h1>
            <div className='indices'>
                <ul style={{color:'white'}}>
                    <li style={{padding:'10px'}}><img src={out} style={{width:'30px'}}></img>       Conditions will be good for outdoor activities</li>
                    <li style={{padding:'10px'}}><img src={fly} style={{width:'35px'}}></img>Conditions are excellent for flying!</li>
                    <li style={{padding:'10px'}}><img src={dr} style={{width:'35px'}}></img>  This is an excellent day for driving</li>
                    <li style={{padding:'10px'}}><img src={he} style={{width:'35px'}}></img>Weather Conditions create a lowered risk of catching a cold and will help to make colds less severe and for shorter duration</li>
                    <li style={{padding:'10px'}}><img src={run} style={{width:'35px'}}></img>Conditions will be good for outdoor activities</li>
                </ul>
            </div>

        </div>
        </div>
        </div>
        </div>
     );
    // }
}

export default Home;