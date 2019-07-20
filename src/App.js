import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import LoginPage from './containers/Auth/LoginPage';
import RegisterPage from './containers/Auth/RegisterPage';
import AppLoader from './components/AppLoader';

import PrivateRoute from './components/PrivateRoute';
import { browserHistory } from './common/helper';
import ForgotPassword from './containers/Auth/ForgotPassword';
import Dashboard from './containers/Dashboard';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </Switch>
        </Router>
        <AppLoader></AppLoader>
      </div>
    );
  }
}

