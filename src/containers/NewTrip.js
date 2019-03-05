import React from 'react';
import GoogleApiWrapper from '../components/Maps';
import Header from '../components/Header';
import StopsList from '../components/StopsList';
import FundsTrak from '../components/FundsTrak';
import '../Component_Styles/NewTrip.css';

const BuildTrip = (props) => {
  return (
    <div>
      <Header />
      <div className='trip-container'>
        <div className='left'>
          <StopsList history={props.history} origin={props.match.params.origin} destination={props.match.params.destination} />
        </div>
        <div className='right'>
          <FundsTrak />
        </div>
        <div className="map">
          <GoogleApiWrapper />
        </div>
      </div>
    </div>
  )
}

export default BuildTrip;