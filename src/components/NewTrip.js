import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Component_Styles/NewTrip.css';

class Trip extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
    };
  }

  _originHandler(event) {
    this.setState({
      origin: event.target.value,
    });
    console.log(event);
  };

  _destinationHandler(event) {
    this.setState({
      destination: event.target.value,
    });
    console.log(event);
  };

  _submitHandler(event) {
    event.preventDefault();
    this.props.history.push(`/new/${this.state.origin}/${this.state.destination}`)
  };

  render() {
    return (
      <div className="trip-container">
        <form onSubmit={this._submitHandler.bind(this)}>
          <input type="text" id="origin" placeholder="Origin" onChange={this._originHandler.bind(this)} />
          <input type="text" id="destination" placeholder="Destination" onChange={this._destinationHandler.bind(this)} />
          <button type="submit" id="search"> Search </button>
        </form>
      </div>
    )
  }
}

export default Trip;