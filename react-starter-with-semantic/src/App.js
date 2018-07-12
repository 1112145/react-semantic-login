import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './containers/LoginPage';
import AppLoader from './components/AppLoader';

import PrivateRoute from './components/PrivateRoute';
import HomePage from './containers/HomePage';
import { browserHistory } from './common/helper';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={HomePage} />
          </Switch>
        </Router>
        <AppLoader></AppLoader>
      </div>
    );
  }
}

