import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './containers/LoginPage';
import AppLoader from './components/AppLoader';

import PrivateRoute from './components/PrivateRoute';
import HomePage from './containers/HomePage';
import { browserHistory } from './common/helper';
import Setting from './containers/Setting';
import RegisterPage from './containers/RegisterPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/setting" component={Setting} />
            <PrivateRoute exact path="/" component={HomePage} />
          </Switch>
        </Router>
        <AppLoader></AppLoader>
      </div>
    );
  }
}

