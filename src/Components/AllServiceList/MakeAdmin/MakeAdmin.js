import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';

const MakeAdmin = () => {
    return (
        <div className='ServiceList makeAdmin'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <div className='serviceName'>
                            <img style={{width: '150px'}} src={Logo} alt="Logo service" className='img-fluid'></img><br></br> <br></br>
                            <Link to='/allservice' >Service List</Link> <br></br> 
                            <Link to='/addservice'>Add Service</Link> <br></br>
                            <Link to='/makeadmin' className='serviceCurrent'>Make Admin</Link> <br></br>
                        </div>
                    </div>

                    <div className='col-md-9'>
                        <h3>Make Admin</h3> <br></br> <br></br>
                        <form>
                            <label for='email'>Email</label><br></br>
                            <input type='email' id='email' placeholder='Enter Email' className='form-control'></input>
                            <input type='submit' value='Send' className='btn btn-success'></input>
                        </form>
                     </div>
                    <div className='col-md-1'>
                        <b><p>Nishsarga</p></b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;