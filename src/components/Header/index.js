import React from 'react';
import './styles.scss';
import Logo from '../Logo';
import MiniCart from '../MiniCart';

const Header = ({cart, cartTotal, handleAdd}) => {

  return(

    <header className="App-header">
      <div className="container">
        <div className="--left">
          <Logo />
        </div>
        <div className="--right">
          <MiniCart cart={cart} cartTotal={cartTotal} handleAdd={handleAdd}/>
        </div>
      </div>
    </header>
  
  )
}

export default Header;