import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';
import SideCart from './components/SideCart';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
      cart: []
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount () {
    axios.get(`https://j-parre.myshopify.com/products.json`)
    .then(res => {
      const data = res.data.products;
      this.setState({
        products: data
      })
    })
  }
  
  handleAdd(accumulator, a) {
    return accumulator + a;
  }

  handleAddToCart(product){
    this.setState({cart: [...this.state.cart, product]})
    const cartItem = this.state.cart.find(x => x.id === product.id);
    !cartItem && this.setState({cart: [...this.state.cart, product]})
  }

  
  render() {
    const {products, cart} = this.state;
    return (
      <div className="App">
        <Header cart={cart} handleAdd={this.handleAdd}/>
        <HeroComponent />
        <div className="container">
          <div className="product-cart__wrapper">
            <ProductsList products={products} handleAddToCart={this.handleAddToCart} />
            <SideCart cart={cart} handleAdd={this.handleAdd}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}




export default App;
