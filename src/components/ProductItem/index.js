import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Safe from 'react-safe';
import './styles.scss';

// Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ProductItem extends Component {

  constructor(){
    super()

    this.state ={
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const {product, handleClick} = this.props
    console.log(product)
    return(
      // <div className="product">
      
        <div className="product__card">
          <div className="product__card-image">
            <img src={product.images[0].src} alt={product.title} />
          </div>
            
          <div className="product__card-info">
            <div className="product__title">{product.title}</div>
            <div className="product__price">£{product.variants[0].price}</div>
          </div>
          <div className="product__card-buttons">
            <button className="btn btn-red" onClick={()=>{handleClick(product)}}>Add to Cart</button>
            <button className="btn btn-grey" onClick={this.handleOpenModal} >Quick View</button>
          </div>
          <div>
            <ReactModal 
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              style={customStyles}
              >
              <div className="product-modal__wrapper">
                <button onClick={this.handleCloseModal} >x</button>
                <div className="product-modal__content">
                
                  <div className="product__card-image">
                    <img src={product.images[0].src} alt={product.title} />
                  </div>
                  <div className="product__card-info">
                    <div className="product__title">{product.title}</div>
                    <div className="product__price">£{product.variants[0].price}</div>
                    <div className="product__sizing">
                      {product.variants.map((variant, i)=> (
                        <p key="i">{variant.title}</p>
                      ))}
                    </div>
                    <div className="product__description">
                      <h5>Product Description: </h5>
                      <Safe.div>{product.body_html}</Safe.div>
                    </div>
                  </div>
                  <div className="button__wrapper">
                    <button className="btn btn-red" onClick={()=>{handleClick(product)}}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </ReactModal>
          </div>
        </div>

      // </div>
    )
  }
  
}

export default ProductItem;