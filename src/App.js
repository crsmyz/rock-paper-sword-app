import React, { Component } from 'react';
import logo from './logo.svg';

//games states
import Rock from './game-components/rock.js';
import Paper from './game-components/paper.js';
import Sword from './game-components/sword.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rock></Rock>
        <Paper></Paper>
        <Sword></Sword>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
