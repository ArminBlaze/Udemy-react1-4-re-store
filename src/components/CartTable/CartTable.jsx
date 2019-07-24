import React from 'react';

import './CartTable.css';

const CartTable = () => {
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
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering!</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <button className='btn btn-outline-danger btn-small'>
                <i className="fa fa-trash-o" />
              </button>
              <button className='btn btn-outline-success btn-small'>
                <i className="fa fa-plus-circle" />
              </button>
              <button className='btn btn-outline-warning btn-small'>
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="CartTable__total">
        Total: $201
      </div>
    </div>
  )
}

export default CartTable;