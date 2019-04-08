import React from 'react';
import './styles.scss';
import Logo from '../Logo';

const Footer = () => {
  const anchorUrls = {
    "urls" : [
      {
        "anchorUrl" : "/terms-and-conditions",
        "anchorText" : "Terms & Conditions" 
      },
      {
        "anchorUrl" : "/privacy-policy",
        "anchorText" : "Privacy Policy"
      },{
  
        "anchorUrl" : "/contact",
        "anchorText" : "Contact Us"
      }
    ]
  }
  console.log(anchorUrls)
  
  return (
    <footer>
      <div className="footer-content__wrapper container">
        <div className="logo_wrapper">
          <Logo filledClass />
        </div>
        <div className="copy-content">
          &copy;Eclectees Co Ltd. 2019
        </div>
        <div className="legal-links__wrapper">

          {
            anchorUrls.urls.map((url, i) => (
              <div className="link" key={i} >
                <a href={url.anchorUrl}>{url.anchorText}</a>
              </div>

            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer;