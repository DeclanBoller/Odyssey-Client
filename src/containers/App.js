import React, { Component } from 'react';
import HomePage from '../components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage history={this.props.history} />
      </div>
    );
  }
}

export default App;
