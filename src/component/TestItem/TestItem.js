import React from 'react';
import './TestItem.css';

const TestItem = (props) => {
  return (
    <div className="TestItem">
      <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p>Available: {props.available} | Price: {props.price}</p>
    </div>
  );
}

export default TestItem;