import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Adminnav from './Adminnav';
import './Admin.css'

function Admin() {
    const navigate = useNavigate();
    const [city, setCity] = useState([]);
    const [dt, setDt] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8181/city/get")
            .then((response) => {
                setCity(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching city data:", error);
            });
    }, []);
    return (
        <div className='backgr'>
            <div className='admbac'>
                <Adminnav />
            </div>
            <div style={{paddingLeft:'80px',paddingRight:'80px',paddingBottom:'50px'}}>
                <div className="new"style={{paddingBottom:'80px'}}>
                <button onClick={() => navigate('/adminpost')} style={{float:"right",width:'8%',height:'8vh'}}>New Record</button>
                </div>
            <div className='adcontent'>
                <h1 style={{fontSize:"50px",paddingLeft:"30px"}}>Overview</h1>
                <div style={{paddingLeft:'10%',paddingBottom:'40px'}}>
                <div className='contview'>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Date</th>
                                <th>Temperature</th>
                            </tr>
                        </thead>
                        <tbody>
                            {city.map((c) => (
                                <tr key={c.cityId}>
                                    <td>{c.cityName}</td>
                                    <td>19.05.2023</td>
                                    <td>29°C</td>
                                </tr>
                            ))}
                        </tbody>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Admin;
