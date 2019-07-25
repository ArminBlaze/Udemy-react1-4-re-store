const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    value: newBooks,
  }
}

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    value: error,
  }
}

export {
  booksRequested,
  booksLoaded,
  booksError,
};