import React from 'react';
import '../Component_Styles/stops.css';
import { Link } from 'react-router-dom';

const StopsList = () => {
  return (
    <div className="stops-container">
      <div className='searchItems'>
        <input type="text" id="inputGoog" placeholder="Search Location..." />
        <input type="submit" id="searchGoog" />
      </div>
      <Link to='/itinerary'>
        <button className='itinerary-btn'>View Itinerary</button>
      </Link>
    </div>
  );
};

export default StopsList;