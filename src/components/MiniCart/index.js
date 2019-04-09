import React, {Component} from 'react';

import Cart from '../../images/cart-icon.png'
import './styles.scss';

class MiniCart extends Component {

  render() {
    const {cart, handleAdd} = this.props;
    let total = []
    cart.forEach((item) => {
      total.push(parseFloat(item.variants[0].price));
    })

    return(

      <div className="mini-cart__wrapper">
        <img src={Cart} alt="cart-icon"/>
        {
          cart && cart.length ?
          <p>£{total.length && total.reduce(handleAdd).toFixed(2)} <span className="cart__count">{cart.length}</span></p> : null
        }
      </div>
      )
  }
} 


export default MiniCart;