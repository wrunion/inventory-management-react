import React from "react";

export default class ShopList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.items.map((item) =>
          <div>{item.name} | Price: {item.price}</div>
        )}
      </React.Fragment>
    );
  }
}