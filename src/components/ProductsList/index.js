import React, {Component} from 'react';
import axios from 'axios';

class ProductsList extends Component {

  constructor() {
    super()

    this.state = {
      products: []
    }
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

  render() {

    const { products } = this.state;

    console.log(this.state)
    return products ? (
      <div className="product-list__wrapper">
        {products.map((product, i) => {
          return (
            <p key={i} >{product.title}</p>
          )
        })}
      </div>
    ) : null;
  }
}

export default ProductsList