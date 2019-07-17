import React from 'react';
import { BookstoreServiceConsumer } from 'components/BookstoreServiceContext';

const withBookstoreService = (Component, mapMethodsToProps) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
      {
        (BookstoreService) => {
          let methods = mapMethodsToProps(BookstoreService);
          return <Component {...props} {...methods} />
        }
      }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService;