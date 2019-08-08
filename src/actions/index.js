const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    value: newBooks,
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    value: error,
  }
}

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    value: bookId,
  } 
}

const bookMinusCount = (bookId) => {
  return {
    type: 'BOOK_MINUS_COUNT',
    value: bookId,
  }
}

const bookDeleteFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    value: bookId,
  }
}


// const fetchBooksOld = (dispatch, bookstoreService) => () => {
//   dispatch( booksRequested() );
//   bookstoreService.getBooks()
//     .then( (data) => dispatch(booksLoaded(data)) )
//     .catch( (err) => dispatch(booksError(err)) )
// }

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch( booksRequested() );
  bookstoreService.getBooks()
    .then( (data) => dispatch(booksLoaded(data)) )
    .catch( (err) => dispatch(booksError(err)) )
}

export {
  fetchBooks,
  bookAddedToCart,
  bookMinusCount,
  bookDeleteFromCart,
};