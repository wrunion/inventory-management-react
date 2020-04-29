import React, { Component } from 'react';
import { v4 } from 'uuid';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

export default class TestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      // item1 = {
      //   name: "Blue Shirt",
      //   description: "Lightweight cotton",
      //   available: 200,
      //   price: 10
      // },
      // item2 = {
      //   name: "Red Shirt",
      //   description: "Tagless comfort",
      //   available: 200,
      //   price: 10
      // },
      // item3 = {
      //   name: "Green Shirt",
      //   description: "Lightweight cotton",
      //   available: 200,
      //   price: 10
      // },
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
      ]
    }
  }

    handleEditClick = (e) => {
      this.setState({ editMode: true });
    }

    render() {
      return (
        <div className="ItemList">
          {this.state.data.map(item =>
            <Item key={v4()}>
              <h3>{item.name}</h3>
              <p><em>{item.description}</em></p>
              <p>Available: {item.available} | Price: {item.price}</p>
              <button onClick={this.handleEditClick}>Edit Item</button>
            </Item>
          )}
          <p><em>Edit mode is {this.state.editMode ? 'on' : 'off'}</em></p>
        </div>
      );
    }
  }     