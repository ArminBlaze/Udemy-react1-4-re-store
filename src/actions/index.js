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

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch( booksRequested() );
  bookstoreService.getBooks()
    .then( (data) => dispatch(booksLoaded(data)) )
    .catch( (err) => dispatch(booksError(err)) )
}

export {
  fetchBooks,
};