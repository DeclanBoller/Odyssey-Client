import React from 'react';
import '../Component_Styles/stops.css';

const StopsList = () => {
  return (
    <div className="stops-container">
      <div className='searchItems'>
        <input type="text" id="inputGoog" placeholder="Search Location..." />
        <input type="submit" id="searchGoog" />
      </div>
      <a href="#" className='itinerary-btn'>View Itinerary</a>
    </div>
  );
};

export default StopsList;