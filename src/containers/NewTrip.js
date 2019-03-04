import React, { Component } from 'react';
import GoogleApiWrapper from '../components/Maps';
import Header from '../components/Header';
import StopsList from '../components/Stops';
import FundsTrak from '../components/FundsTrak';

class BuildTrip extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
        }}>
          <div className='left' style={{
            display: 'flex',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            zIndex: '1',
          }}>
            <StopsList />
          </div>
          <div className='right' style={{
            height: '200px',
            width: '200px',
            zIndex: '1',
            position: 'absolute',
            right: '15px',
            top: '20px',
          }}>
            <FundsTrak />
          </div>
          <div className="map" style={{
            position: 'absolute',
            top: '0',
            height: '100%',
            width: '100%',
            zIndex: '0',
          }}>
            <GoogleApiWrapper />
          </div>
        </div>
      </div>
    )
  }
}

export default BuildTrip;