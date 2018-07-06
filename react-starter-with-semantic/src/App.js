import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar logo={"https://react.semantic-ui.com/logo.png "}
          leftItem={[
            { as: "a", content: "Home", key: "home" },
            { as: "a", content: "Users", key: "users" }
          ]} />
      </div>
    );
  }
}

export default App;
