import React, { Component } from 'react';
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
        }}>
          <div className='left' style={{
            height: 'calc(100vh - 100px)',
            width: '50%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            margin: '0',
          }}>
            <StopsList />
          </div>
          <div className='right' style={{
            height: 'calc(100vh - 100px)',
            width: '50%',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '15px 15px 0 0',
          }}>
            <FundsTrak />
          </div>
        </div>
      </div>
    )
  }
}

export default BuildTrip;