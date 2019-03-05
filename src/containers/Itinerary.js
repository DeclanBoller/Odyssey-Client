import React from 'react';
import Header from '../components/Header';

const Itinerary = () => {
  return (
    <div>
      <Header />
      <div className='bg-itinerary' style={{
        height: 'calc(100vh - 100px)',
        width: '100%',
        background: 'var(--text-secondary)',
      }}>
      </div>
    </div>
  );
}

export default Itinerary;