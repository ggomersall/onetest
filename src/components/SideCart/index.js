import React, {Component} from 'react';

import './styles.scss';

class SideCart extends Component {

  render() {
    const {cart, handleAdd} = this.props;
    let total = []
    cart.forEach((item) => {
      total.push(parseFloat(item.variants[0].price));
    })


    return (
      <div className="side-cart__wrapper">
        <div className="side-cart__card">
          <div className="side-cart__title">
            <h5>Cart <span className="cart__count">{cart.length}</span></h5>
          </div>
          {
            cart && cart.length ? cart.map((c, i) => {
              return (
                <div className="side-cart__contents" key={i}>
                  <div className="cart__product-details">
                    <p>{c.title}</p>
                    <span className="cart__product-size">{c.variants[0].title}</span>
                    
                  </div>
                  <div className="cart__product-price">
                    <p>{c.variants[0].price}</p>
                  </div>
                  
                  {/* To work on later --- didn't get round to doing this
                  <span className="cart__product-remove">x</span>*/ }

                </div>
              )
            }): <p>Your cart is empty</p>
          }
          {
            cart && cart.length ?
            <div className="side-cart__total">
            <div className="total-description">
              <p>Total</p>
              <span>including xx in taxes</span>
            </div>
            <div className="total-price">
              <p>{total.length && total.reduce(handleAdd).toFixed(2)}</p>
            </div>
          </div> : null
          }
        </div>
      </div>
    )
  }
}

export default SideCart;