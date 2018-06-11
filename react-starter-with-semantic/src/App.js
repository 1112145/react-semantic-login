import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Menu} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu inverted>
        <Menu.Item active={true} name='Test'></Menu.Item>
        <Menu.Item name='Go go go'></Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default App;
