import React from 'react'
import {useSelector} from 'react-redux';

export default function Profile() {
    const user=useSelector(state => state.user.value)
    if(!user.email){
        return;
    }
  return (
    <div>
        <h2>Email:{user.email}</h2>
    </div>
  )
}