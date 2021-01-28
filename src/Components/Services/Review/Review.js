import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Review.css';
import Logo from '../../../images/logos/logo.png';
import { authContext } from '../../../App';
import { useForm } from "react-hook-form";

const Review = () => {
    const [user, setUser] = useContext(authContext)
    const [review, setReview] = useState({})
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://shielded-bayou-70874.herokuapp.com/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        })
        .then(res => res.json())
        .then(allVal => {
            console.log('allVal:', allVal);
        }) 
    }
    return (
        <div className='ServiceList review'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-2'>
                        <div className='serviceName'>
                            <Link to='/'>
                           <img style={{width: '150px'}} src={Logo} alt="Logo service" className='img-fluid'></img>
                           </Link>
                           <br></br> <br></br>
                            <Link to='/order'>Order</Link> <br></br> 
                            <Link to='/serviceList' >Service List</Link> <br></br>
                            <Link to='' className='serviceCurrent'>Review</Link> <br></br>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <h3>Order</h3> <br></br> <br></br>
                        <div className='row'>

                            <form style={{'width' : '100%'}} onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder="Name" className="form-control" name="Name" ref={register}></input> <br></br>

                                <input type="text" placeholder="Company Name" className="form-control" name="CompanyName" ref={register}></input> <br></br>

                                <textarea className="form-control" col='5' row='10' placeholder='description' name="description" ref={register}></textarea><br></br>

                                <input type='submit' value='Send' className='btn btn-secondary'/>
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

export default Review;
