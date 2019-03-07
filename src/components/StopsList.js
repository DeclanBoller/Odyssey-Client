import React, { Component } from 'react';
import '../Component_Styles/StopsList.css';
import axios from 'axios';

class StopsList extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
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
    if (this.state.searchValue.trim() === '') {
      return
    }
    this.setState({
      stopsList: [...this.state.stopsList, this.state.searchValue],
      searchValue: '',
    });
  }

  _viewItinerary(event) {
    let SERVER_URL = 'https://odyssey-server.herokuapp.com';

    axios.post(`${SERVER_URL}/trips`, {
      origin: this.props.origin,
      destination: this.props.destination,
      stops: this.state.stopsList
    }).then((result) => {
      console.log(result);

      this.props.history.push(`/itinerary/${result.data.id}`)
    })

  }

  render() {
    return (
      <div className="stops-container" >
        <div className='searchItems'>
          <input value={this.state.searchValue} type="text" id="inputGoog" placeholder="Add New Stop..." onChange={this._searchHandler.bind(this)} />
          <input type="submit" value="Add Stop" id="searchGoog" onClick={this._submitHander.bind(this)} />
        </div>
        <div className='stops-list'>
          <ul>
            <li className='new-stop-item'>{this.props.origin} <button className='add-info'>+</button></li>
            {this.state.stopsList.map((stop, i) =>
              <li key={i} className='new-stop-item'>
                {stop}
                <button className='add-info'>+</button>
              </li>
            )}
            <li className='new-stop-item'>{this.props.destination}<button className='add-info'>+</button></li>
          </ul>
          <button onClick={this._viewItinerary.bind(this)} className='itinerary-btn'>View Itinerary</button>
        </div>
      </div>
    );
  }
};

export default StopsList;