import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App';
import NewTrip from './containers/NewTrip';
import Itinerary from './containers/Itinerary';
import { HashRouter as Router, Route } from 'react-router-dom';

const Routes = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/new/:origin/:destination' component={NewTrip} />
      <Route path='/itinerary/:id' component={Itinerary} />
    </div>
  </Router>
);

ReactDOM.render(Routes, document.getElementById('root'));
