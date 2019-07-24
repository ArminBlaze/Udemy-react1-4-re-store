import React from 'react';
import BookList from 'components/BookList/BookList';
import CartTable from 'components/CartTable/CartTable';


const HomePage = () => {

  return (
    <div>
      <h1>Страница с книгами.</h1>
      <BookList />
      <CartTable />
    </div>
  )
}


export { HomePage };