import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cloud from './images/cloudy.png'
import cust from './images/home.png'
import wor from './images/world.png'
import loc from './images/report.png'
import pro from './images/profile.png'
import './weatherrep.css'
import CanvasJSReact from '@canvasjs/react-charts';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart
class Weatherrep extends Component {
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
                    <li><a href='/home'><img src={cust} style={{width:'35px'}}></img></a></li>
                    <li><Link to='/world'><img src={wor} style={{width:'40px'}}></img></Link></li>
                    </ul>
                    </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
                </div>
                </div>
                <div className='chart-cont'>
                <div className='chart'>
            <div className='sep-ch'>
        <CanvasJSChart options = {options}/>
            </div>
        </div>
        </div>
        </div>
        </div>
        );
    }
} 
export default Weatherrep;  