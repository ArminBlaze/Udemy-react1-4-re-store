import React from 'react';
import Spinner from 'components/Spinner/Spinner';
import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';
import withBookstoreService from 'hocs/withBookstoreService';


class App extends React.Component {

  render() {
    const { bookstoreService } = this.props;
    console.log(bookstoreService.getBooks());

    return (
        <div className="RestoreApp">
          <Spinner />
          <ErrorIndicator />
        </div>
    )
  }
}

export default withBookstoreService(App);