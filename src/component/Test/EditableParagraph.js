import React, { Component } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

class EditableParagraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null,
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
    }
  }

  render() {
    return (
      <div className="EditableParagraph"></div>
    );
  }
}

export default EditableParagraph;