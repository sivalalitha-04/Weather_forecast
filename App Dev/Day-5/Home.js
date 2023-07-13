import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CanvasJSReact from '@canvasjs/react-charts';
import Login from './Login';
import './Home.css'
import cl from './images/logo cloud.png'
import cloud from './images/cloudy.png'
import cust from './images/custom.png'
import loc from './images/loc.png'
import pro from './images/profile.png'
import cs from './images/cloud-s.png'
import { dayWeather } from './data';
import { weekWeather } from './data';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart
class Home extends Component {

    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        const options = {
			animationEnabled: true,
            backgroundColor: '#091b2b',
            height: 250,
            width:400,
			title:{
				text: "Weather Report",
                fontColor:"white"
			},
			axisX: {
                labelFontColor:'white',
				valueFormatString: "MMM"
			},
			axisY: {
                titleFontColor:'white',
                labelFontColor:'white',
				title: "Humidity(in %)",
				suffix: "%"
			},
			data: [{
				// yValueFormatString: "##",
				// xValueFormatString: "MM",
                fontColor:"white",
				type: "spline",
				dataPoints: [
					{ x: new Date(2023, 0), y: 20 },
					{ x: new Date(2023, 1), y: 30 },
					{ x: new Date(2023, 2), y: 50 },
					{ x: new Date(2023, 3), y: 40 },
					{ x: new Date(2023, 4), y: 50 },
					{ x: new Date(2023, 5), y: 30 },
					{ x: new Date(2023, 6), y: 20 },
					{ x: new Date(2023, 7), y: 50 },
					{ x: new Date(2023, 8), y: 30 },
					{ x: new Date(2023, 9), y: 20 },
					{ x: new Date(2023, 10), y: 10 },
					{ x: new Date(2023, 11), y: 40 }
				]
			}]
        }
    return ( 
        <div className='home_back-grnd'>
            <div className='home_'>
            <div className='home_cont'>
                <div className='imag'>
                    <img src={cloud} className='logo' style={{width:'40px'}} alt='icon'></img></div>
                    <div className='links'>
                    <ul  id="navbar" className={this.state.clicked?"#navbar active":"navbar"}>
                    <li><a href='#'><img src={cust} style={{width:'35px'}}></img></a></li>
                    <li><a href='#'><img src={loc} style={{width:'40px'}}></img></a></li>
                    <li><Link to='/login'><img src={pro} style={{width:'30px'}}></img></Link></li>
                    </ul>
                    </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
                </div>
            </div>
            <div className='search-b'>
        <div className="search-bar">
            <div className='s-b'>
            <input type="text" placeholder="Search..." />
            <button type="submit" className='search-but'>
                <i className="fas fa-search"></i>
            </button>
            </div>
            {/* <div className='date-in'>
                <input type='date'></input>
                <input type='text' placeholder='time'></input>
            </div> */}
        </div>
        </div>
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
        <div className='hour-det'>
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
        <div className='chart'>
            <div className='sep-ch'>
        <CanvasJSChart options = {options}
			/>
            </div>
        </div>
        </div>
        </div>
        </div>
     );
    }
}

export default Home;