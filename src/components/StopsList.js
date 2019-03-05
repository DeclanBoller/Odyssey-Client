import React, { Component } from 'react';
import '../Component_Styles/StopsList.css';
import { Link } from 'react-router-dom';

class StopsList extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: null,
      stopsList: [],
    }
  }

  _searchHandler(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  _submitHander(event) {
    event.preventDefault();
    this.setState({
      stopsList: [...this.state.stopsList, this.state.searchValue],
      searchValue: '',
    });
  }

  render() {
    return (
      <div className="stops-container" >
        <div className='searchItems'>
          <input value={this.state.searchValue} type="text" id="inputGoog" placeholder="Search Location..." onChange={this._searchHandler.bind(this)} />
          <input type="submit" id="searchGoog" onClick={this._submitHander.bind(this)} />
        </div>
        <div>
          <ul>
            <li>{this.props.origin}</li>
            <li>{this.props.destination}</li>
          </ul>
        </div>
        <Link to='/itinerary'>
          <button className='itinerary-btn'>View Itinerary</button>
        </Link>
      </div>
    );
  }
};

export default StopsList;