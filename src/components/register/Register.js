import React from 'react';
import './register.css';

const Register = () => {
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">E-social</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on E-social
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="password" className="loginInput" />
              <input placeholder="Re-type password" className="loginInput" />
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">
                Login into an Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
