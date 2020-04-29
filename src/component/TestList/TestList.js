import React, { Component } from 'react';
// import { v4 } from 'uuid';
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
      if (this.state.editMode === false) {
      return (
        <div className="TestList">
        {this.state.data.map(item =>
          <Item>
          <h3>{item.name}</h3>
          <p><em>{item.description}</em></p>
          <p>Available: {item.available} | Price: {item.price}</p>
          <button onClick={this.handleEditClick}>Edit Item</button>
          </Item>)}
          <p>Edit mode is {this.state.editMode ? 'on' : 'off'}</p>
        </div>
      );
      } else {
        return (
        <div className="TestList editDisplay">
        {this.state.data.map(item =>
          <Item>
          <h3><input type="text" value={item.name} /><span className="grey-text">(Edit Mode On)</span></h3>
          <p><em>{item.description}</em></p>
          <p>Available: {item.available} | Price: {item.price}</p>
          <button onClick={this.handleEditClick}>Save Changes</button>
          </Item>)}
          <p>Edit mode is {this.state.editMode ? 'on' : 'off'}</p>
        </div>
          );
        ;
      }
    }
  }     

  //
  {/* <Item  
          // key={v4()}
          // name = {item.name}
          // description = {item.description}
          // available = {item.available}
  // price = {item.price} />)*/}