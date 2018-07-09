import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import { Image } from 'semantic-ui-react';

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Users", key: "users" }
]

const rightItems = [
  { content: <Image src='https://image.flaticon.com/icons/svg/145/145859.svg' onClick={() => { console.log('ssss') }} avatar />, key: 'avatar' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar logo={"https://react.semantic-ui.com/logo.png "}
          leftItems={leftItems} rightItems={rightItems}>
          <span>App Content</span>
        </NavBar>
      </div>
    );
  }
}

export default App;
