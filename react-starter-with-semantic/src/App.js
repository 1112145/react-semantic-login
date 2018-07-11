import React, { Component } from 'react';
import './App.css';
import Login from './containers/AuthPages/Login';
import config from './config';

class App extends Component {
  render() {
    return (
      <Login appLogo={config.logo} />
    );
  }
}

export default App;
