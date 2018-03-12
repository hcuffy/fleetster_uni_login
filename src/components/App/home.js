import React from 'react';
import './style.css';

const Home = (props) => {
  return (
    <div className="profile-wrapper">
        <p className="profile">{props.userInfo}</p>
        <button className="logout-btn" onClick={props.handleLogout}>Logout</button>
    </div>
 );
}

export default Home;
