// Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h2>Order your favourite food here</h2>
          <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
