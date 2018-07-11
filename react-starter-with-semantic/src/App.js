import React, { Component } from 'react';
import './App.css';
import Login from './containers/AuthPages/Login';

import config from './config'
console.log(config);

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default App;
