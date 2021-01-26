import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Shared/Nav/Nav';
import './Header.css';
import Frame from './../../../images/logos/Frame.png';

const Header = () => {
    return (
        <div>
            <header> 
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                        <Nav></Nav>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-sm-12 headerContent mt-5'>
                        <h1>Let's Grow Your Brand To The Next Level</h1>
                        <p>lorem ipsum dolor sit amet, consectetur adipis,dolor sit amet, ipsum dolor sit amet</p>
                        <Link to='/hire' className='hire blackBtn'>Hire us</Link>
                    </div>
                    <div className='col-md-6 offset-md-1 col-sm-12'>
                        <img className='img-fluid' src={Frame} alt={'growBig'}></img>
                    </div>
                </div>
                </div>

                <img alt="headerBG" src="https://assets.codepen.io/t-517/divider-triangle.png" class="divider" />
            </header>  
        </div>
    );
};

export default Header;