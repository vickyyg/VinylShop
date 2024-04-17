import React from 'react';
import './Footer.css';
import facelogo from '../Assets/facelogo.png';
import instalogo from '../Assets/instalogo.png';
import wpplogo from '../Assets/wpplogo.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-center">
        
        <div className="footer-links">
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-social">
          <div className="social-icons-container">
            <img src={facelogo} alt='' />
            <img src={instalogo} alt='' />
            <img src={wpplogo} alt='' />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>CopyRight @2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
