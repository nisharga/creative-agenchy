import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../App';
import Logo from './../../../images/logos/logo.png';
import { useForm } from "react-hook-form";



const Order = () => {
    const handleImageChange = () => {
        alert('Hello')
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(allVal => {
            console.log('allVal:', allVal);
        }) 
        alert('Submited')
    };

    const [user, setUser] = useContext(authContext)
    return (
        <div className='ServiceList review order'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <div className='serviceName'>
                            <Link to='/'>
                           <img style={{width: '150px'}} src={Logo} alt="Logo service" className='img-fluid'></img>
                           </Link>
                           <br></br> <br></br>
                            <Link to='/order' className='serviceCurrent'>Order</Link> <br></br> 
                            <Link to='/serviceList' >Service List</Link> <br></br>
                            <Link to='/review'>Review</Link> <br></br>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <h3>Order</h3> <br></br> <br></br>
                        <div className='row'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder="Your Name" className="form-control" name="Name" ref={register} value={user.displayName}></input> <br></br>

                                <input type="email" placeholder="Your Email Address" className="form-control" name="Email" ref={register} value={user.email}></input> <br></br>

                                <input type="text" placeholder="Graphic Design" className="form-control" ref={register} name="department"></input> <br></br>
                               
                                <input type="text" placeholder="Project Details" className="form-control" ref={register} name="details"></input>

                                <input type="text" value='pending' ref={register} name="status" className="pending" style={{'opacity' : '0', 'visibility' : 'hidden'}}></input>

                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Price" className="form-control"></input>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="file" onChange={handleImageChange} className="form-control" ></input>
                                    </div>
                                </div>

                                <input type='submit' value="Send" className="hire blackBtn"></input>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-2 loginUser'>
                        <b><p>{user.displayName ? user.displayName : 'creative' }</p></b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;