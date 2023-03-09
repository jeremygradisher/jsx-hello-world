import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Just showing how to pass JSX</li>
    <li>as a variable</li>
    <li>This is the way</li>
  </ul>
);

// Copy code here:
//ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'));
ReactDOM.render(myList, document.getElementById('root'));