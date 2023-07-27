import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux';
import UserLogout from "./logout";
import user from './features/user';
import wor from './images/world.png'
import loc from './images/report.png'
import ab from './images/about.png'
import pro from './images/profile.png'
import logo from './images/wea-logo.png'
import hom from './images/home.png'
import './Navbar.css'

function Navbar(){
    const user=useSelector(state => state.user.value);
    return(
    <div className='home_cont'>
            <div className='imag'>
                <img src={logo} style={{width:'130px'}}/>
                        </div>
                    <div className='links'>
                    <ul  id="navbar">
                     <li><Link to='/home'><img src={hom} style={{width:'40px'}}></img></Link></li>
                     <li><Link to='/world'><img src={wor} style={{width:'40px'}}></img></Link></li>
                     <li><Link to='/report'><img src={loc} style={{width:'40px'}}></img></Link></li>
                     <li><Link to='/aboutus'><img src={ab} style={{width:'30px'}}></img></Link></li>
                    <li>{!user.email?<Link to='/login'><img src={pro} style={{width:'30px',paddingLeft:'80%'}}></img></Link>:
                     <p style={{color:'white'}}>{user.email}  <UserLogout/></p>}</li>
                    </ul>
                    </div>
                    </div>
    );
}
export default Navbar;
