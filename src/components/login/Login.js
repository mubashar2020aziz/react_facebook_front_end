import React from 'react';
import './login.css';

const Login = () => {
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
              <input placeholder="Email" className="loginInput" />
              <input placeholder="password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Password Forgot?</span>
              <button className="loginRegisterButton">
                Create a new Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
