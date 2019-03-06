import React, { Component } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/loginform';
import axios from 'axios';
import '../Component_Styles/Itinerary.css';

class Itinerary extends Component {
  constructor() {
    super();
    this.state = {
      trip: [],
    }
  }

  _fetchTrip(event) {
    let SERVER_URL = 'https://odyssey-server.herokuapp.com';
    axios.get(`${SERVER_URL}/trips/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response);

        this.setState({
          trip: response.data,
        })
      });
  }

  componentDidMount() {
    this._fetchTrip();
  }

  render() {
    if (this.state.trip.length > 0) {
      var start = this.state.trip[0].location;
      var end = this.state.trip[this.state.trip.length - 1].location;
    }
    return (
      <div>
        <Header />
        <div className='bg-itinerary'>
          <div className='stop-title'>
            <h1>Itinerary For: {start} > {end} </h1>
          </div>
          <div className='stops-wrapper'>
            {this.state.trip.map((stop, i) =>
              <div key={stop.id} className='stop-trips'>
                <div className='stop-item'>
                  <li className='li-1'>{i + 1}</li>
                  <li className='li-2'>Location: {stop.location}</li>
                  <li className='li-3'>Stop Info: {stop.stop_info}</li>
                  <button id='remove-trip-detail'>Remove Stop Info</button>
                </div>
                <button id='remove-leg'>Remove Leg</button>
              </div>
            )}
          </div>
          <div>
            <h1>Your Saved Trips</h1>
          </div>
        </div>
        <LoginForm />
      </div>
    );
  }
}

export default Itinerary;