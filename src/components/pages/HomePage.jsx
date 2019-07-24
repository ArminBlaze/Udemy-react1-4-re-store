import React from 'react';
import BookList from 'components/BookList/BookList';
import CartTable from 'components/CartTable/CartTable';


const HomePage = () => {

  return (
    <div>
      <BookList />
      <CartTable />
    </div>
  )
}


export { HomePage };