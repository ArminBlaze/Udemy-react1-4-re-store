import React from 'react';
import './ShopHeader.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopHeader = ({ orderTotal, countTotal }) => {
  return (
    <header className="ShopHeader row">
      <Link to="/" className="ShopHeader__logo text-dark">ReStore</Link>
      <Link to="/cart" className="ShopHeader__cart">
        <i className="cart-icon fa fa-shopping-cart" />
        { showCart(orderTotal, countTotal) }
      </Link>
    </header>
  )
};

function showCart(orderTotal, countTotal) {

  if(orderTotal && countTotal) {
    return <span>{countTotal} items (${orderTotal})</span>
  }

  return <span>Cart</span>
}


const mapStateToProps = (state) => {
  const {countTotal, orderTotal} = state.shoppingCart;

  return {
    countTotal,
    orderTotal,
  }
};


export default connect(mapStateToProps)(ShopHeader);