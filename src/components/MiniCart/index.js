import React from 'react';

import Cart from '../../images/cart-icon.png'
import './styles.scss';

const MiniCart = () => (
  <div className="mini-cart__wrapper">
    <img src={Cart} alt="cart-icon"/>
    <p>£14.14 <span className="cart__count">1</span></p>
  </div>
)

export default MiniCart;