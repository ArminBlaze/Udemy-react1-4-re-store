import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookMinusCount, bookDeleteFromCart } from 'actions';

import './CartTable.css';

const CartTable = ({ items, total, onPlus, onMinus, onDelete }) => {

  return (
    <div className="CartTable">
      <h2>Your Order</h2>
      <table className='table CartTable__table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
          {
            items.map( (item, i) => {
              return <CartItem
                key={item.id}
                item={ item }
                i={i}
                onPlus={ onPlus } 
                onMinus={ onMinus } 
                onDelete={ onDelete } 
                />
            }   )
          }
        </tbody>
      </table>

      <div className="CartTable__total">
        Total: ${total}
      </div>
    </div>
  )
}

class CartItem extends PureComponent {
  render() {
    const { item, onPlus, onMinus, onDelete, i } = this.props;
    const {id, title, total, count} = item;
    console.log(this.props);

    
    return (
      <tr key={id}>
        <td>{i+1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button className='btn btn-outline-success btn-small'
            onClick={() => onPlus(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button className='btn btn-outline-warning btn-small'
            onClick={() => onMinus(id)}>
            <i className="fa fa-minus-circle" />
          </button>
          <button className='btn btn-outline-danger btn-small'
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }
}


const mapStateToProps = (state) => {
  const {cartItems, orderTotal} = state.shoppingCart;

  return {
    items: cartItems,
    total: orderTotal,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const { bookstoreService } = ownProps;
  return {
    // fetchBooks: fetchBooks(dispatch, bookstoreService)
    onPlus: (id) => dispatch( bookAddedToCart(id) ),
    onMinus: (id) => dispatch( bookMinusCount(id) ),
    onDelete: (id) => dispatch( bookDeleteFromCart(id) ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);