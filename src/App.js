import React, { Component } from 'react';

import './App.scss';

import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';
import SideCart from './components/SideCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroComponent />
        <div className="container">
          <div className="product-cart__wrapper">
            <ProductsList />
            <SideCart />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
