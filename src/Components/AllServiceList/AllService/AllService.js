import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import './AllService.css';

const AllService = () => {
    return (
        <div className='ServiceList review order allService'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <div className='serviceName'>
                            <img style={{width: '150px'}} src={Logo} alt="Logo service" className='img-fluid'></img><br></br> <br></br>
                            <Link to='/allservice' className='serviceCurrent'>Service List</Link> <br></br> 
                            <Link to='/addservice'>Add Service</Link> <br></br>
                            <Link to='/makeadmin'>Make Admin</Link> <br></br>
                        </div>
                    </div>

                    <div className='col-md-9'>
                        <h3>Service List</h3> <br></br> <br></br>
                        <div className='row'>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>Nisharga</td>
                                <td>Kabirnissharga@gmail.com</td> 
                                <td>Graphic design</td>
                                <td>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</td>
                                <td>pending</td>
                            </tr>    
                            <tr>
                                <td>Nisharga</td>
                                <td>Kabirnissharga@gmail.com</td> 
                                <td>Graphic design</td>
                                <td>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</td>
                                <td>pending</td>
                            </tr> 
                        </table>
                        </div>
                    </div>
                    <div className='col-md-1'>
                        <b><p>Nishsarga</p></b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllService;