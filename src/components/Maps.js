import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../Component_Styles/NewTrip.css';



class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lng: 151.209198,
      lat: -33.868572
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB4T6AUfdsQls3GhJaUQbKFAzPcTZydTag', }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
