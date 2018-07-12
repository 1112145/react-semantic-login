import React, { Component } from 'react';
import './App.css';
import LoginPage from './containers/LoginPage';
import config from './config';
import AppLoader from './components/AppLoader';

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage appLogo={config.logo} />
        <AppLoader></AppLoader>
      </div>
    );
  }
}

export default App;
