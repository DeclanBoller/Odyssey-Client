import React from 'react';
import { Link } from 'react-router-dom';
import '../Component_Styles/NewTrip.css';

const Trip = () => {
  return (
    <div className="trip-container">
      <form action="">
        <input type="text" id="origin" placeholder="Origin" />
        <input type="text" id="destination" placeholder="Destination" />
        <Link to='/new'>
          <button type="submit" id="search"> Search</button>
        </Link>
      </form>
    </div>
  )
}

export default Trip;