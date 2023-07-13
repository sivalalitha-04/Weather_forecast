import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { worldWeather } from './data';
import cloud from './images/cloudy.png'
import rep from './images/report.png'
import home from './images/home.png'
import './World.css'

class World extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <div className='home_back-grnd'>
                <div className='home_'>
                <div className='home_cont'>
                <div className='imag'>
                    <img src={cloud} className='logo' style={{width:'40px'}} alt='icon'></img></div>
                    <div className='links'>
                    <ul  id="navbar" className={this.state.clicked?"#navbar active":"navbar"}>
                    <li><a href='/home'><img src={home} style={{width:'35px'}}></img></a></li>
                    <li><Link to='/world'><img src={rep} style={{width:'40px'}}></img></Link></li>
                    <li><p style={{color:'white'}}>Hey!! Sivalalitha</p></li>
                    </ul>
                    </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
                </div>
            </div>
            <div className='world'>
                <div className='select'>
                    <h2>Add Places!
            <select value={this.state.selectedOption} style={{borderRadius:'20px',height:'30px',width:'20%',paddingLeft:'20px',boxShadow:'1px 1px 1px 1px black'}} onChange={this.handleSelectChange}>
                <option value="london">London</option>
                <option value="paris">Paris</option>
                <option value="newyork">NewYork</option>
                <option value="dubai">Dubai</option>
                <option value="rome">Rome</option>
                <option value="singapore">Singapore</option>
                <option value="tokyo">Tokyo</option>
                <option value="sydney">Sydney</option>
                <option value="beijing">Beijing</option>
            </select></h2>
            </div>
            <div className='add-but'>
                <button style={{width:'25%',height:'20px',backgroundColor:'rgb(9, 27, 43)',color:'white',height:'30px',borderRadius:'10px'}}>Add</button>
            </div>
            </div>
            <div className='world'>
            <div className='w-cont'>
                {worldWeather.map((worldWeather) =>
                <div className='w-sep'>
                    <div className='w-con'>
                        <p>{worldWeather.name}
                        {worldWeather.desc}
                        {worldWeather.time}</p>
                    </div>
                </div>
                )}
            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default World;