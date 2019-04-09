import React, {Component} from 'react';
import './styles.scss';
import ProductItem from '../ProductItem';

class ProductsList extends Component {

  handleClick = (product) => {
    this.props.handleAddToCart(product)
  }

  render() {

    
    const { products } = this.props;

    return products ? (
      <div className="product-list__wrapper">
        {products.map((product, i) => {
          return (
            <ProductItem key={i} product={product} handleClick={this.handleClick} />
          );
        })}
      </div>
    ) : null;
  }
}

export default ProductsList