import React from 'react';
import ReactDOM from 'react-dom';
// game components
import Rock from './rock';
import Paper from './paper';
import Sword from './sword';

it('should have a rock', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Rock />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should have paper', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paper />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should have a sword', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sword />, div);
    ReactDOM.unmountComponentAtNode(div);
});