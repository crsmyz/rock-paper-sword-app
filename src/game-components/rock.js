import React, { Component } from 'react';
import rock from './../rock.png';

class Rock extends Component {
  render() {
    return (
      <div className="answer rock">
        <img src={rock} className="rock-img" alt="ROCK" />
      </div>
    );
  }
}

export default Rock;
