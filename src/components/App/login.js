import React from 'react';
import './style.css';

const Login = (props) => {

  return (
    <div className="form-wrapper">

        <form onSubmit={props.handleLogin}>
          <input name="email" type="text" placeholder="Enter your email"
          onChange={props.handleChange}/>
          <input name="password" type="password" placeholder="Enter your password"
          onChange={props.handleChange}/>
          <button className="custom-btn">Login</button>
        </form>

        <span onClick={props.entryChange} className="register">Register</span>
    </div>
  );
};

export default Login;
