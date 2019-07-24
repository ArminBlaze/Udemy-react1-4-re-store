import React from 'react';
import './BookListItem.css';


const BookListItem = ({ book }) => {
  const {title, author, price, coverImage} = book;

  return (
    <div className='BookListItem book'>
      <div className="book__cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="book__details">
        <a href="/#" className="book__title">{title}</a>
        <div className="book__author">{author}</div>
        <div className="book__price">${price}</div>
		    <button className="btn btn-info addToCart">Add To Cart</button>
      </div> 
    </div>
  )
}

export default BookListItem;