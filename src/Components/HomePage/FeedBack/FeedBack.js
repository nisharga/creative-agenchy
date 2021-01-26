import React from 'react';
import './FeedBack.css';

const FeedBack = () => {
    const review = [
        {
            'name' : 'Nash Patrik',
            'position' : 'CEO, Manpol',
            'post': 'lorem ipsum dolor sit amet, conse adipiscing, lorem ipsum dolor sit amet, lorem ipsum dolor amet,',
            'img' : 'customer-1.png',
        },
        {
            'name' : 'Miriam Barron',
            'position' : 'CEO, Manpol',
            'post': 'lorem ipsum dolor sit amet, conse adipiscing, lorem ipsum dolor sit amet, lorem ipsum dolor amet,',
            'img' : 'customer-2.png',
        },
        {
            'name' : 'Bria Malone',
            'position' : 'CEO, Manpol',
            'post': 'lorem ipsum dolor sit amet, conse adipiscing, lorem ipsum dolor sit amet, lorem ipsum dolor amet,',
            'img' : 'customer-3.png',
        } 
    ]
    return (
        <div style={{padding: '100px 0px'}} className='feedback'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <b><h2>Clients <span>FeedBack</span></h2></b>
                    </div>
                </div>
                <div className='row justify-content-around'>
                    {
                        review.map(data => 
                            <div className='col-md-3 col-md-1 col-sm-5 offset-md-1 single_feedback'>
                            <div className='feedbackNameImage'>
                                <div className='image'>
                                    <img src={require(`../../../images/${data.img}`)} alt='Feedback people'></img>
                                </div>
                                <div className='feedback_meta'>
                                    <h5><b>{data.name}</b></h5>
                                    <h6>{data.position}</h6>
                                </div>
                            </div>
                        
                            <p>{data.post}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FeedBack;