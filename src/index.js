import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App';
import NewTrip from './containers/Build';
import { HashRouter as Router, Route } from 'react-router-dom';

const Routes = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/new' component={NewTrip} />
    </div>
  </Router>
);

ReactDOM.render(Routes, document.getElementById('root'));
