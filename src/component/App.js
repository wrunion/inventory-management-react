import React from 'react';
import './App.css';
import CartList from './CartList/CartList';
import ShopList from './ShopList/ShopList';

const sampleItems = [
  {
    name: 'Item 1',
    quantity: 1,
    price: '1.99',
    purchased: 0
  },
  {
    name: 'Item 2',
    quantity: 10,
    price: '9.99',
    purchased: 0
  },
  {
    name: 'Item 3',
    quantity: 5,
    price: '1.99',
    purchased: 0
  }
]

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }

  render() {

    return (
      <div class="appgrid">
        <div class="leftheader">Merch Site</div>
        <div class="rightheader">Cart</div>
        <div class="shoparea"><ShopList items={sampleItems} /></div>
        <div class="cartarea"><CartList cart={this.state.cart} /></div>
      </div>
    );
  }

}