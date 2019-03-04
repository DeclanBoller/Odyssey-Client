import React from 'react';
import '../Component_Styles/fundsTrak.css';

import FuelIcon from '../Assets/fuel.png';
import ActivityIcon from '../Assets/Activities.png';
import HotelIcon from '../Assets/hotel.png';
import CoinIcon from '../Assets/coin.png';

const FundsTrak = () => {
  return (
    <div className='funds-container'>
      <div className='balance'>
        <h3>Budget: <span id='budget'>$000.00</span></h3>
      </div>
      <div className='bottom'>
        <div className='fuel'>
          <img src={FuelIcon} alt="Fuel Icon" />
          <span id="fuel-cost">$0.00</span>
        </div>
        <div className='activity'>
          <img src={ActivityIcon} alt="" />
          <span id="activity-cost">$0.00</span>
        </div>
        <div className='hotel'>
          <img src={HotelIcon} alt="" />
          <span id="hotel-cost">$0.00</span>
        </div>
        <div className='total'>
          <img src={CoinIcon} alt="" />
          <span id="total-cost">$0.00</span>
        </div>
      </div>
    </div>
  )
}

export default FundsTrak;