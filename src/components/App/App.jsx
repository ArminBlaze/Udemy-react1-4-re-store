import React from 'react';
import Spinner from 'components/Spinner/Spinner';
import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';

import { BookstoreServiceProvider } from 'components/BookstoreServiceContext';

import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import reducer from 'reducer'; //тут импоритруем файл редусера

// const store = createStore(reducer);

class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <div className="RestoreApp">
          <Spinner />
          <ErrorIndicator />
        </div>
      </Provider>
    )
  }
}

export default App;