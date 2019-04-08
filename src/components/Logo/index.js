import React from 'react';
import classNames from 'classnames';
import './styles.scss';


const Logo = ({filledClass}) => {

  return(
    <h1 className={classNames({logo: true, 'filled': filledClass})}>
      <a href="#" >Eclectees<sup>co</sup></a>
    </h1>
  )
}

export default Logo