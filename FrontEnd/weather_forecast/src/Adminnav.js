import React, { Component } from 'react'
import logo from './images/wea-logo.png'
import './Adminnav.css'
function Adminnav(){
    return(
        <div className='adnav'>
            <div className='imag'>
                <img src={logo} style={{width:'130px'}}/>
            </div>
            <div className='links'>
                <ul  id="navbar">
                    <li>Hello, Admin...</li>
                </ul>
            </div>
        </div>
    )
}

export default Adminnav;