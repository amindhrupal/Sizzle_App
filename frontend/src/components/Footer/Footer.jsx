// Footer.jsx

import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} height="125" alt="Sizzle Logo" />
          <p>Sizzle & Devour!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
            <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-456-9870</li>
            <li>contact@sizzle.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Sizzle.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
