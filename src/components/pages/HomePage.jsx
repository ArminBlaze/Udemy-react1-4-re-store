import React from 'react';
import withBookstoreService from 'hocs/withBookstoreService';
import BookList from 'components/BookList/BookList';



const HomePage = ({bookstoreService}) => {
  let books = bookstoreService.getBooks();

  return (
    <div>
      <h1>Страница с книгами.</h1>
      <BookList books={ books } />
    </div>
  )
}

let HomePageWithContext = withBookstoreService(HomePage);

export { HomePageWithContext as HomePage };