import React, { Component } from 'react';
import { v4 } from 'uuid';
import Item from '../Item/Item';
import './TestList.css';

export default class TestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
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

  /* Toggles editMode between true and false on button press */ 
  handleEditClick = (e) => {
    this.setState({ editMode: true });
    this.state.editMode ? this.setState({editMode: false}) : this.setState({editMode : true});
  }

    render() {
      return (
        <div className="TestList">
        {this.state.data.map(item =>
          <Item 
          key={v4()}
          name = {item.name}
          description = {item.description}
          available = {item.available}
          price = {item.price} />)}
          
          <button onClick={this.handleEditClick}>Edit Item</button>
          
          <p>Edit mode is {this.state.editMode ? 'on' : 'off'}</p>
        </div>
      );
    }
  }     