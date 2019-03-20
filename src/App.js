import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//games states
import Rock from './game-components/rock.js';
import Paper from './game-components/paper.js';
import Sword from './game-components/sword.js';

import './css/App.css';

class App extends Component {
  state = {
    show: 0
  };

  // adding event handler to this
  changeGameState = () => {
    this.setState({ show: Math.floor(Math.random() * 3) + 1 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.show && this.state.show === 1 ? <Rock></Rock> : null}
          {this.state.show && this.state.show === 2 ? <Paper></Paper> : null}
          {this.state.show && this.state.show === 3 ? <Sword></Sword> : null}
          <div className="buttonWrapper">
            <button type="button" className="btn btn-primary btn-lg enlarge" onClick={this.changeGameState}>Play</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
