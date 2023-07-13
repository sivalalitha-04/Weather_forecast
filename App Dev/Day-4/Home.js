import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CanvasJSReact from '@canvasjs/react-charts';
import Login from './Login';
import './Home.css'
import cloud from './images/cloudy.png'
import cust from './images/custom.png'
import loc from './images/loc.png'
import pro from './images/profile.png'
import cs from './images/cloud-s.png'
// import { dayWeather } from './data';
// import { weekWeather } from './data';

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart
class Home extends Component {

    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
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
        
        </div>
        </div>
     );
    }
}

export default Home;