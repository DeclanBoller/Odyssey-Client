import React from 'react';
import Login from './login_button';
import Trip from './NewTrip';

import Facebook from '../Assets/facebook.png';
import Instagram from '../Assets/instagram.png';
import Twitter from '../Assets/twitter.png';

import '../Component_Styles/home.css';

const HomePage = () => {
  return (
    <div className='home-bg'>
      <div className="icons">
        <a href="#"> <img src={Twitter} alt=" Twitter Icon" /> </a>
        <a href="#"> <img src={Facebook} alt="Facebook Icon" /> </a>
        <a href="#"> <img src={Instagram} alt="Instagram Icon" /> </a>
      </div>

      <div className="login">
        <Login />
      </div>

      <div className='title'>
        <h1>odyssey</h1>
        <h3>Because It’s Not About The Destination, <span>It’s About The Journey</span></h3>
        <Trip />
      </div>
    </div>
  );
}

export default HomePage;