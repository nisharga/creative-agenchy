import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({value}) => {
    return (
        <Link to='/order' className='col-md-3 singleService text-center'>
            <img src={require(`../../../../images/icons/${value.icon}`)} alt={'service icon'} style={{'width': '70px'}}></img>
            <h5>{value.title}</h5>
            <p>{value.content}</p>
        </Link>
    );
};

export default SingleService;