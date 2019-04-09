import React from 'react';
import './styles.scss';
import Logo from '../Logo';
import MiniCart from '../MiniCart';

const Header = () => {

  return(

    <header className="App-header">
      <div className="container">
        <div className="--left">
          <Logo />
        </div>
        <div className="--right">
          <MiniCart />
        </div>
      </div>
    </header>
  
  )
}

export default Header;