import React from 'react';
import { BookstoreServiceConsumer } from 'components/BookstoreServiceContext/BookstoreServiceContext';

const withBookstoreService = (Component, mapMethodsToProps) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return <Component {...props} 
              bookstoreService={bookstoreService} />
          }
        }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService;