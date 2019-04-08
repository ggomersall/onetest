import React from 'react';
import './styles.scss';

import Background from '../../images/clothes-backgrnd.png';

const HeroComponent = () => (
  <section className="hero__section">
    <div className="hero-banner" style={{backgroundImage: `url(${Background})`}}/>
  </section>
)

export default HeroComponent;