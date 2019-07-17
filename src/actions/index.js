
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    value: newBooks,
  }
}

export {
  booksLoaded,
};