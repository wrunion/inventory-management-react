import React, { Component } from 'react';
import { v4 } from 'uuid';
import Item from '../Item/Item';
import './ItemList.css';

const data = [
  {
    name: "Blue Shirt",
    description: "Lightweight cotton",
    available: 200,
    price: 10
  },
  {
    name: "Red Shirt",
    description: "Tagless comfort",
    available: 200,
    price: 10
  },
  {
    name: "Green Shirt",
    description: "Lightweight cotton",
    available: 200,
    price: 10
  }
]

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {data.map(item => <Item key={v4()}>
          <h3>{item.name}</h3>
          <p><em>{item.description}</em></p>
          <p>Available: {item.available} | Price: {item.price}</p>
          <button>Change Quantity</button>
        </Item>)}
      </div>
    );
  }
}