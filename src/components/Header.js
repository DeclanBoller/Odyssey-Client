import React from 'react';
import Logo from '../Assets/map-location.png';
import Login from '../components/login_button';
import '../Component_Styles/header.css';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img src={Logo} alt="Odyssey Logo" />
        <h1>Odyssey</h1>
        <Login />
      </div>
    </div>
  );
};

export default Header;