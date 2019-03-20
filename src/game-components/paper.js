import React, { Component } from 'react';
import paper from './../paper.png';

class Paper extends Component {
  render() {
    return (
      <div className="answer paper">
        <img src={paper} className="paper-img" alt="PAPER" />
      </div>
    );
  }
}

export default Paper;
