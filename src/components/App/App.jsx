import React from 'react';
import Spinner from 'components/Spinner/Spinner';
import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';

import { BookstoreServiceProvider } from 'components/BookstoreServiceContext';
import BookstoreService from "services/BookstoreService";

import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import reducer from 'reducer'; //тут импоритруем файл редусера

// const store = createStore(reducer);

class App extends React.Component {

  state = {
    BookstoreService: new BookstoreService(),
  }

  render() {
    return (
      <BookstoreServiceProvider  value={ this.state.BookstoreService }>
        <div className="RestoreApp">
          <Spinner />
          <ErrorIndicator />
        </div>
      </BookstoreServiceProvider>
    )
  }
}

export default App;