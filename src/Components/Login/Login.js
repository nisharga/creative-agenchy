import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Logo from '../../images/logos/logo.png';
import GoogleLogo from '../../images/logos/googleLogo.png';
import './Login.css';

import firebase from "firebase/app"
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'; 
import { authContext } from '../../App';



const Login = () => {
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useContext(authContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {  
    var Googleuser = result.user; 
    setUser(Googleuser) 
    history.replace(from);    
  }).catch((error) => {  
  });
 
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='LoginLogo mt-4'>
                            <img src={Logo} alt='Login Logo' style={{'width': '150px'}}></img>
                        </div>
                        <div className='loginBox'>
                            <h4>Login With</h4>
                            <button className='googleLoginBtn' onClick={handleLogin}>
                            <img src={GoogleLogo} alt={'google Logo'}></img>
                            Continue with Google
                            </button>
                            <h6>Don't have an account? 
                            <Link className='createAccount' onClick={handleLogin}>Create an account</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;