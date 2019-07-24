import React from 'react';
import './ShopHeader.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="ShopHeader row">
      <Link to="/" className="ShopHeader__logo text-dark">ReStore</Link>
      <Link to="/cart" className="ShopHeader__cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </header>
  )
};

export default ShopHeader;