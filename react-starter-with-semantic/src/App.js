import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import config from './config';
import AppLoader from './components/AppLoader';

class App extends Component {
  render() {
    return (
      <div>
        <Login appLogo={config.logo} />
        <AppLoader></AppLoader>
      </div>
    );
  }
}

export default App;
