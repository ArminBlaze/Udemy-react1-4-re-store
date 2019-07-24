import React from 'react';
import './ShopHeader.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="ShopHeader row">
      <a href="#" className="ShopHeader__logo text-dark">ReStore</a>
      <a className="ShopHeader__cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  )
};

export default ShopHeader;