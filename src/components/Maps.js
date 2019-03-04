import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class TripMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google} zoom={14}>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB4T6AUfdsQls3GhJaUQbKFAzPcTZydTag')
})(TripMap)