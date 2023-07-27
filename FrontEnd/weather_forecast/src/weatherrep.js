import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cloud from './images/cloudy.png'
import cust from './images/home.png'
import wor from './images/world.png'
import logo from './images/wea-logo.png'
import ab from './images/about.png'
import loc from './images/report.png'
import pro from './images/profile.png'
import './weatherrep.css'
import CanvasJSReact from '@canvasjs/react-charts';
import Navbar from './Navibar';



var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart
class Weatherrep extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){

        const options1 = {
			animationEnabled: true,
            backgroundColor: '#091b2b',
            height: 250,
            width:400,
			title:{
				text: "Humidity Report",
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
        const options2 = {
			animationEnabled: true,
            backgroundColor: '#091b2b',
            height: 250,
            width:400,
			title:{
				text: "Temperature Report",
                fontColor:"white"
			},
			axisX: {
                labelFontColor:'white',
				valueFormatString: "MMM"
			},
			axisY: {
                titleFontColor:'white',
                labelFontColor:'white',
				title: "Temperature(in °C)",
				suffix: "°C"
			},
			data: [{
				// yValueFormatString: "##",
				// xValueFormatString: "MM",
                fontColor:"white",
				type: "spline",
				dataPoints: [
					{ x: new Date(2023, 0), y: 29 },
					{ x: new Date(2023, 1), y: 32 },
					{ x: new Date(2023, 2), y: 23 },
					{ x: new Date(2023, 3), y: 33 },
					{ x: new Date(2023, 4), y: 35 },
					{ x: new Date(2023, 5), y: 30 },
					{ x: new Date(2023, 6), y: 25 },
					{ x: new Date(2023, 7), y: 29 },
					{ x: new Date(2023, 8), y: 20 },
					{ x: new Date(2023, 9), y: 32 },
					{ x: new Date(2023, 10), y: 23 },
					{ x: new Date(2023, 11), y: 19 }
				]
			}]
        }
        return ( 
            <div className='home_back-grnd'>
                <div className='home_'>
               <Navbar/>
			   <h1 style={{fontSize:'45px',padding:'30px'}}>Report</h1>
                <div className='chart-cont'>
					<div className='cha1'>
						<div className='chart'>
        <CanvasJSChart options = {options1}/>
		</div>
		<div className='par'>
		<h3>Humidity is the concentration of water vapor present in the air. Water vapor, the 
			gaseous state of water, is generally invisible to the human eye. 
			Humidity indicates the likelihood for precipitation, dew, or fog to be present. 
			Humidity depends on the temperature and pressure of the system of interest</h3>
			</div>
		</div>
		<div className='cha1'>
						<div className='chart'>
        <CanvasJSChart options = {options2}/>
		</div>
		<div className='par'>
		<h3>Temperature is a physical quantity that expresses quantitatively the perceptions of hotness and coldness. 
			Temperature is measured with a thermometer. Thermometers are calibrated in various temperature 
			scales that historically have relied on various reference points and thermometric substances for definition.</h3>
			</div>
		</div>
        </div>
        </div>
        </div>
        );
    }
} 
export default Weatherrep;  