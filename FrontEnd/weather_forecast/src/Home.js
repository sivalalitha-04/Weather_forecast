import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './Home.css'
import {useSelector} from 'react-redux';
import UserLogout from "./logout";
import wor from './images/world.png'
import s from './images/sun.png'
import loc from './images/report.png'
import pro from './images/profile.png'
import out from './images/out.png'
import run from './images/run.png'
import fly from './images/flight.png'
import dr from './images/dr.png'
import he from './images/he.png'
import ab from './images/about.png'
import logo from './images/wea-logo.png'
import { dayWeather, worldWeather } from './data';
import { weekWeather } from './data';
import { city } from './data';
import { useEffect } from 'react';
import axios from 'axios';
// import ImageSlider from './backslider';

function Home(){

        const user=useSelector(state => state.user.value)

        const [searchvalue, setSearchValue]=useState('');
        const [ttime, setTime]=useState('');
        const [ddate, setDate]=useState('');
        const [gosearch, setGoSearch]=useState("NewDelhi");
        const [gotime, setGoTime]=useState("00:00:00");
        const [godate, setGoDate]=useState("01-01-2023");
        const [deg, setDegree]=useState('');
        const [selop, setSelop]=useState('');
        const [citys,setCitys]=useState([]);
        const [temp,setTemp]=useState(35);
        const [ss,setSS]=useState('--');
        const [sr,setSR]=useState('--');
        const [ns,setNS]=useState('--');
        const [ne,setNE]=useState('--');
        const [descr,setDescr]=useState("Sunny");
      
        const onChangeSelop = (e) => {
            setSelop(e.target.value);
            axios.get("http://localhost:8181/city/get")
            .then((resp) => {
              setCitys(resp.data);
              console.log(resp.data);
            })
        }

        const onDesc = (tempp) => {
            if(tempp>33){
                setDescr("Sunny");
                console.log(tempp);
            }
            else if(tempp >= 29 && tempp <=32){
                setDescr("Partly Sunny");
                console.log(tempp);
            }
            else if(tempp >=25 && tempp<29){
                console.log(tempp);
                setDescr("Cloudy,Chances to Rain");
            }
            else if(temp<=24){
                console.log(tempp);
                setDescr("Rainy");
            }
        }
        const onChangeSearch = (event) => {
            setSearchValue(event.target.value);
        }
        const onChangeDate = (event) => {
            setDate(event.target.value);
        }
        const onDegree = () => {
            setDegree("C°");
        }
        const onChangeTime = (event) => {
            setTime(event.target.value);
        }
        const [currTime,setCurrtime]=useState(new Date());
        const currentDate = new Date();

        useEffect(() => {
            axios.get("http://localhost:8181/city/get")
            .then((resp) => {
              setCitys(resp.data);
              console.log(resp.data);
            })
          },[]);

        // useEffect(() => {
        //     const interval = setInterval(() => {
        //         setCurrtime(new Date());
        //       }); 
          
        //       return () => clearInterval(interval);
        //     }, []);
        //     const formattedTime = currTime.toLocaleTimeString([], {
        //         hour: '2-digit',
        //         minute: '2-digit',
        //       });
        // const onDate =(date) =>{
        //     setDate(date)
        //     console.log("date:", date)
        // }
        const onSearch =(searchitem) =>{
            setSearchValue(searchitem)
            console.log('search:',searchitem);
        }
        // const onTime =(time) =>{
        //     setTime(time)
        //     console.log("time:", time)
        // }
        
        const handleGo = () => {
            setGoSearch(searchvalue);
            setGoDate(ddate);
            setGoTime(ttime);
          
            axios.post("http://localhost:8181/getTemperature", {
              cityName: gosearch,
              date: godate,
              time: gotime,
            })
            .then((response) => {
              const temperature = response.data.tem;
              setTemp(temperature);
              onDesc(temperature);
              const suninfo = response.data.suninfo;
              if (Array.isArray(suninfo) && suninfo.length >= 1) {
                const innerArray = suninfo[0];
                setSR(innerArray[0]);
                setSS(innerArray[1]);
                setNS(innerArray[2]);
                setNE(innerArray[3]);
                console.log(ss);
              } else {
                console.log("Suninfo does not contain any arrays.");
              }
            })
            .catch((error) => {
              console.error("Error occurred during the axios request:", error);
            });
          };
          

        return ( 
        <div className='home_back-grnd'>
            <div className='home_'>
                <div className='adpur'>
                    {!user.email?<Link to="/adminlog"  style={{color:'white'}}> for admin purpose</Link>:<h1></h1>}
                </div>
            <div className='home_cont'>
            <div className='imag'>
                <img src={logo} style={{width:'130px'}}/>
                        </div>
                    <div className='links'>
                    
                    <ul  id="navbar">
                     <li><Link to='/world'><img src={wor} style={{width:'40px'}}></img></Link></li>
                     <li><Link to='/report'><img src={loc} style={{width:'40px'}}></img></Link></li>
                     <li><Link to='/aboutus'><img src={ab} style={{width:'30px'}}></img></Link></li>
                     <li><Link to='/feedback'>feedback</Link></li>
                    <li>{!user.email?<Link to='/login'><img src={pro} style={{width:'30px'}}></img></Link>:
                     <p style={{color:'white'}}>{user.email}  <UserLogout/></p>}</li>
                    </ul>
                    </div>
            </div>
            {user.email?
        <div className='search-b'>
        <div className="search-bar">
            <div className='s-b'>
                <div className='sep' style={{paddingBottom:'10px'}}>
            <select style={{width:'90px',height:'35px',borderRadius:'10px'}} value={selop} onChange={onChangeSelop}>
                <option >Places</option>
                <option>Pincode</option>
                <option>Geo_Coord</option>
            </select>
            </div>
                <div className='sep' style={{paddingBottom:'10px'}}>
            <input type="text" placeholder="Search..." value={searchvalue} onChange={onChangeSearch}  />
            </div>
            {/* {selop==="Places"? */}
            <div className='dropdown'>
                {citys.filter(item => {
                    const searchitem = searchvalue.toLowerCase();
                    const cityname = item.cityName.toLowerCase();

                    return searchitem && cityname.startsWith(searchitem) && cityname!=searchitem;
                }).slice(0,5)
                .map((item) => (
                    <div className='dropdown-row' onClick={() => onSearch(item.cityName)}>{item.cityName}</div>
                ))}
            </div>
            </div>
            <div className='date-in'>
                <div className='sep'>
                <input type='date' value={ddate} onChange={onChangeDate}></input>
                </div>
                <div className='sep'>
                <input type='time' step="3" value={ttime} onChange={onChangeTime} style={{width:'120px'}} placeholder='time'></input>
                </div>
                <div className='sep'>
                <button type='submit' className='search-but' onClick={() => {handleGo(ddate,ttime,searchvalue)}}>Go!</button>
                <button className='search-but' onClick={() => onDegree()}>F°</button>
                </div>
            </div>
        </div>
        </div>:<h1></h1>
        }
        {!user.email?
        <div className='details'>
            <div className='temp'>
                <h1 style={{fontSize:'90px',color:'black'}}>29°C</h1>
            </div>
            <div className='desc'>
            <h3>NewDelhi,TN</h3>
            <h3>Sunny</h3>
            </div>
            <div className='timg'>
            <img src={s} style={{width:'150px',paddingTop:'18%'}}></img>
            </div>
            <div className='time' style={{padding:'2%'}}>
                <div>
            <h2 style={{float:'right'}}>At {currentDate.toLocaleDateString()}</h2>
            </div>
            <div>
            <h2 style={{float:'right'}}>At </h2>
            </div>
            </div>
        </div>:
        <div className='details'>
            <div className='temp'>
                <h1 style={{fontSize:'90px',color:'black'}} >{temp}°C</h1>
            </div>
            <div className='desc'>
            <h3>{gosearch}, TN</h3>
            <h3>{descr}</h3>
            </div>
            <div className='timg'>
            <img src={s} style={{width:'150px',paddingTop:'18%'}}></img>
            </div>
            <div className='time' style={{padding:'2%'}}>
                <div>
            <h2 style={{float:'right'}}>At {godate}</h2>
            </div>
            <div>
            <h2 style={{float:'right'}}>At {gotime}</h2>
            </div>
            </div>
        </div>}
        <div>
        <div className='hour-det'>
               <h1  style={{color:'white',borderRadius:'10px',padding:'10px'}}>Hourly Forecast</h1>
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
            </div>
        </div>
        <div className='d-rep'>
        <div className='dad'>
            <div>
            <h1  style={{color:'white',width:'97%',borderRadius:'10px',padding:'10px'}}>Weekly Forecast</h1>
        </div>
        <div className='day-det'>
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
        </div>
        <div className='down'>
            <div className='dis'>
                <h1 style={{color:'white',width:'97%',borderRadius:'10px',padding:'10px'}}>Disaster Alert</h1>
                <p style={{color:'white',width:'97%',borderRadius:'10px',padding:'10px'}}>None</p>
                </div>
                <div className='sun'>
                <h1 style={{color:'white',width:'97%',borderRadius:'10px',padding:'10px'}}>DayInfo</h1>
                <p style={{color:'white',width:'97%',padding:'1px'}}>Daytime: {sr} to {ss} </p>
                <p style={{color:'white',width:'97%',padding:'1px'}}>Nighttime: {ns} to {ne}</p>
                </div>
                </div>
                </div>
        </div>
        <div className='ind'>
                <h1 style={{color:'white',borderRadius:'10px',padding:'10px'}}>Indices</h1>
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
