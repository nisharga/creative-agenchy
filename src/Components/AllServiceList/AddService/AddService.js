import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';

const AddService = () => {
    const handleAddFile = () => {
        alert("Hello")
    }
    return (
        <div className='ServiceList addService'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <div className='serviceName'>
                            <img style={{width: '150px'}} src={Logo} alt="Logo service" className='img-fluid'></img><br></br> <br></br>
                            <Link to='/allservice'>Service List</Link> <br></br> 
                            <Link to='/addservice' className='serviceCurrent'>Add Service</Link> <br></br>
                            <Link to='/makeadmin'>Make Admin</Link> <br></br>
                        </div>
                    </div>

                    <div className='col-md-9'>
                        <h3>Add Services</h3> <br></br> <br></br>
                        
                        <form>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label for='title'><b>Service Title</b></label><br></br>
                                <input type="text" placeholder='Enter Title' id='title'></input> <br></br>
                                <label for='description'><b>Service Description</b></label><br></br>
                                <input type="text" placeholder='Enter Description' id='description'></input>
                            </div>
                            <div className='col-md-6'>
                                <label for='file'>File</label><br></br>
                                <input type='file' id='file'></input><br></br><br></br><br></br>
                                <input type='submit' value='Submit' onChange={handleAddFile} className='btn btn-primary float-right'></input>
                            </div>
                        </div>
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

export default AddService;