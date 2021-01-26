import React from 'react'; 
import { Link } from 'react-router-dom';
import Logo from './../../../images/logos/logo.png';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light"> 
        <Link className="navbar-brand" to='/'>
            <img style={{width: '140px'}} src={Logo} alt="Logo"></img>
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"> 
            <Link className="nav-link pr-4 pl-4" to="/">Home</Link>
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link pr-4 pl-4" to="/order">Our Portfolio</Link>
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link pr-4 pl-4" to="/team">Our Team</Link>
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link pr-4 pl-4" to="/contact">Contact Us</Link>
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link pr-4 pl-4 loginBtn" to="/login">Login</Link>
          </li> 
        </ul>
      </div>
    </nav> 
    );
};

export default Nav;