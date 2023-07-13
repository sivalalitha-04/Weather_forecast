import React, { Component } from 'react'
import lo from './images/logout.png'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/home";
  }
 
  render() {
    return (
      <a onClick={this.logout}><img src={lo} style={{width:'25px'}}></img></a>
    )
  }
}