import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cust from './images/home.png'
import wor from './images/world.png'
import rep from './images/report.png'
import logo from './images/wea-logo.png'
import Navbar from './Navibar'

class Aboutus extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <div className='home_back-grnd'>
                <div className='home_'>
                <Navbar/>
                <div style={{paddingTop:'20px'}}>
<div className='content-ab' style={{backgroundColor:'rgba(9, 27, 43,0.7)', borderRadius:'10px',width:'94%', padding:'20px',color:'white',fontSize:'20px'}}>
    <p>Users can either manually enter their location or allow the
application to access their device's location data to automatically determine their
current location. Alternatively, users can search for a specific location by
entering the city name, ZIP code, or geographic coordinates.
</p><p>
The weather forecast app displays the current weather
conditions for the selected location. This includes information such as
temperature, humidity, wind speed and direction, precipitation, and visibility.
The data is often presented using visual icons and textual descriptions.
</p><p>The application provides hour-by-hour and dayby-day weather forecasts for the selected location. Users can view predicted
weather conditions, temperatures, precipitation chances, wind information, and
other relevant details for specific time intervals.
Some weather forecast apps offer extended forecasts that
cover a longer time period, such as a week or even several weeks ahead. These
forecasts give users an overview of expected weather patterns and temperature
trends for planning purposes.
</p><p>Many weather forecast apps include interactive
maps and radar imagery. These maps display weather conditions, such as
temperature, precipitation, cloud cover, and satellite imagery, allowing users to
visualize weather patterns and track the movement of storms or other weather
systems.
Weather forecast apps often provide severe weather
alerts and notifications. Users can receive alerts for events like thunderstorms,
hurricanes, tornadoes, or other significant weather events in their area.
Notifications can be sent via email, push notifications, or SMS.
Some weather forecast apps offer access to historical
weather data. </p><p>Users can view past weather conditions for a specific date or time
range, allowing them to analyse trends or compare current weather patterns to
previous years.
Weather forecast apps may allow users to customize certain
aspects of the display, such as units of measurement (e.g., Celsius or Fahrenheit)
or the preferred time format (e.g., 12-hour or 24-hour clock).
</p>
</div>
</div>
                </div>
                </div>
    )
    }
}

export default Aboutus;