import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import ProductsList from './components/ProductsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <ProductsList />
        </div>
      </div>
    );
  }
}

export default App;
