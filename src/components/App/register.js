import React from 'react';
import './style.css';

const Register = (props) => {

  return (
    <div className="form-wrapper">

        <form onSubmit={props.handleSubmit}>
          <input name="email" type="text" placeholder="Enter a valid email."
            onChange={props.handleChange}/>
          <input name="password" type="password" placeholder="Enter a valid password greater than six characters."
            onChange={props.handleChange} />
          <button type="submit" className="custom-btn"
            disabled={props.disable}>Register</button>
        </form>

        <span onClick={props.entryChange} className="login">Login</span>
    </div>
  );
}

export default Register;
