import React from 'react';
import './styles.scss';

const ProductItem = ({product}) => (

  <div className="product__card">
    <div className="product__card-image">
      <img src={product.images[0].src} alt={product.title} />
    </div>

    <div className="product__card-info">
      <div className="product__title">{product.title}</div>
      <div className="product__price">£{product.variants[0].price}</div>
    </div>
    <div className="product__card-buttons">
      <button className="btn btn-danger">Add to Cart</button>
      <button className="btn btn-grey">Quick View</button>
    </div>
  </div>
)

export default ProductItem;