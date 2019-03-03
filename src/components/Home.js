import React, { Component } from 'react';

import Facebook from '../Assets/facebook.png';
import Instagram from '../Assets/instagram.png';
import Twitter from '../Assets/twitter.png';

import './home.css';

const HomePage = () => {
  return (
    <div className='home-bg'>
      <div className="icons">
        <a href="#"> <img src={Twitter} alt=" Twitter Icon" /> </a>
        <a href="#"> <img src={Facebook} alt="Facebook Icon" /> </a>
        <a href="#"> <img src={Instagram} alt="Instagram Icon" /> </a>
      </div>
    </div>
  );
}

export default HomePage;