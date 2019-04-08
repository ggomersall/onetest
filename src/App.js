import React, { Component } from 'react';

import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import ProductsList from './components/ProductsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroComponent />
        <div className="container">
          <ProductsList />
        </div>
      </div>
    );
  }
}

export default App;
