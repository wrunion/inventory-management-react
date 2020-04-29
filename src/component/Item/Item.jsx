import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="Item">
      <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p>Available: {props.available} | Price: {props.price}</p>
    </div>
  );
}

export default Item;