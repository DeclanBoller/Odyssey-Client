import React from 'react';
import Login from './login_button';
import Trip from './OriginDestination';

import Facebook from '../Assets/facebook.png';
import Instagram from '../Assets/instagram.png';
import Twitter from '../Assets/twitter.png';

import '../Component_Styles/home.css';

const HomePage = (props) => {
  return (
    <div className='home-bg'>
      <div className="icons">
        <a href="https://www.twitter.com" target='_blank' rel="noopener noreferrer"> <img src={Twitter} alt=" Twitter Icon" /></a>
        <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer"> <img src={Facebook} alt="Facebook Icon" /></a>
        <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"> <img src={Instagram} alt="Instagram Icon" /></a>
      </div>

      <div className="login">
        <Login />
      </div>

      <div className='title'>
        <h1>odyssey</h1>
        <h3>Because It’s Not About The Destination, <span>It’s About The Journey</span></h3>
        <Trip history={props.history} />
      </div>
    </div>
  );
}

export default HomePage;