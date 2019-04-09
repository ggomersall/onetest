import React, {Component} from 'react';

import './styles.scss';

class SideCart extends Component {

  render() {
    return (
      <div className="side-cart__wrapper">
        <div className="side-cart__card">
          <div className="side-cart__title">
            <h5>Cart <span className="cart__count">1</span></h5>
          </div>
          <div className="side-cart__contents">
            <div className="cart__product-details">
              <p>some tee-shirt</p>
              <span className="cart__product-size">small</span>
              <span className="cart__product-remove">x</span>

            </div>
            <div className="cart__product-price">
              <p>£14.99</p>
            </div>
          </div>
          <div className="side-cart__total">
            <div className="total-description">
              <p>Total</p>
              <span>including xx in taxes</span>
            </div>
            <div className="total-price">
              <p>£14.99</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideCart;