import React, { Component } from 'react';
import sword from './../sword.png';

// need a transistion between a circle spin from the left

class Sword extends Component {
  render() {
    return (
      <div className="answer sword">
      <img src={sword} className="sword-img" alt="SWORD" />
      </div>
    );
  }
}

export default Sword;
