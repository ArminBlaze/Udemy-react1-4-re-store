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

export {
  booksRequested,
  booksLoaded,
};