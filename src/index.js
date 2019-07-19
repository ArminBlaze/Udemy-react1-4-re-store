import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ErrorBoundry from 'components/ErrorBoundry/ErrorBoundry'
import { BookstoreServiceProvider } from 'components/BookstoreServiceContext/BookstoreServiceContext';
import BookstoreService from "services/BookstoreService";
import store from 'store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={ store }>
    <ErrorBoundry>
      <BookstoreServiceProvider  value={ bookstoreService }>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
, document.getElementById('root'));
