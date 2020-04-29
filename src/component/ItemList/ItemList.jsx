import React, { Component } from 'react';
import { v4 } from 'uuid';
import Item from '../Item/Item';
import './ItemList.css';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      editing: null
    }

  }

  handleClickEdit = event => {
    this.setState({ editing: event.target.name });
  }

  render() {
    const key = v4();

    return (
      <div>
        {this.state.data.map(item => {
          if (this.state.editing) {
            this.setState({ editing: null });
            return (
              <Item key={key}>
                <h1>Editing!</h1>
                <button onClick={this.handleClickEdit} name={key}>Edit</button>
                <h3>{item.name}</h3>
                <p><em>{item.description}</em></p>
                <p>Available: {item.available} | Price: {item.price}</p>
              </Item>
            )
          }
          else {
            return (
              <Item key={key}>
                <button onClick={this.handleClickEdit} name={key}>Edit</button>
                <h3>{item.name}</h3>
                <p><em>{item.description}</em></p>
                <p>Available: {item.available} | Price: {item.price}</p>
              </Item>
            )
          }
        })
        }
      </div>
    );

  }
}