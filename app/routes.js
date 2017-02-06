// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import MaintenanceList from './components/MaintenanceList';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/interventions" component={MaintenanceList} />
  </Route>
);
