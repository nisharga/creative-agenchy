import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../App';
import Logo from './../../../images/logos/logo.png';
import './ServiceList.css';
import SingleServiceList from './SingleServiceList';

const ServiceList = () => { 
    const [user, setUser] = useContext(authContext)
            const [Alldata, setAlldata] = useState({})    
            fetch('http://localhost:5000/serviceList', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json'},
                        body: JSON.stringify({Alldata : Alldata })
                    })
                    .then(res=>res.json())
                    .then(val =>  
                    setAlldata(val) 
                    )      
                    
    const serviceList = [
        {
            'icon' : 'service1.png',
            'name' : 'Web & Mobile Design',
            'data' : 'We draft stuning and amazing Web UI using afforted kit to fiet your product',
        },
        {
            'icon' : 'service2.png',
            'name' : 'Graphic Design',
            'data' : 'Amazing Social Media post with brand that makes your brand stand out',
        }
    ]
    return (
        <div className='ServiceList'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <div className='serviceName'>
                           <Link to='/'>
                           <img style={{width: '150px'}} src={Logo} alt="Logo service" className='img-fluid'></img>
                           </Link>
                            <br></br> <br></br>
                            <Link to='/order'>Order</Link> <br></br> 
                            <Link to='serviceList' className='serviceCurrent'>Service List</Link> <br></br>
                            <Link to='/review'>Review</Link> <br></br>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <h3>Order</h3> <br></br> <br></br>
                           <SingleServiceList val={serviceList}></SingleServiceList> 
                    </div>
                    <div className='col-md-2 loginUser'>
                        <b><p>{user.displayName ? user.displayName : 'creative' }</p></b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;