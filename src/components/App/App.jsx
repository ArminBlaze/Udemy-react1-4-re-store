import React from 'react';
// import Spinner from 'components/Spinner/Spinner';
// import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';
import withBookstoreService from 'hocs/withBookstoreService';
import { Route, Switch } from 'react-router-dom';

import { CartPage, HomePage } from 'components/pages'


class App extends React.Component {

  render() {
    return (
        <div className="RestoreApp">
          <Switch >
            <Route path="/" component={HomePage} exact/>
            <Route path="/cart" component={CartPage}/>
          </Switch>
        </div>
    )
  }
}

export default withBookstoreService(App);