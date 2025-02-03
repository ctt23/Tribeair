import React from 'react';
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  return (
    <>
      <Navbar showButtons={false} />
      <div className="loginContainer">
        <div className="loginWrapper">
          <input type="text" placeholder="Username or Email" className="loginInput" />
          <input type="password" placeholder="Password" className="loginInput" />
          <button className="loginButton">Login</button>
          <div className="loginOr">OR</div>
          <button className="loginButton google">
            <FontAwesomeIcon icon={faGoogle} /> Login with Google
          </button>
          <button className="loginButton facebook">
            <FontAwesomeIcon icon={faFacebook} /> Login with Facebook
          </button>
          <button className="loginButton linkedin">
            <FontAwesomeIcon icon={faLinkedin} /> Login with LinkedIn
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
