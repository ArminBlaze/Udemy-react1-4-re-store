import React from 'react';
// import Spinner from 'components/Spinner/Spinner';
// import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';
import withBookstoreService from 'hocs/withBookstoreService';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from 'components/ShopHeader/ShopHeader';
import { CartPage, HomePage } from 'components/pages';


class App extends React.Component {

  render() {
    return (
        <main role="main" className="container">
          <ShopHeader />
          <Switch >
            <Route path="/" component={HomePage} exact/>
            <Route path="/cart" component={CartPage}/>
          </Switch>
        </main>
    )
  }
}

export default withBookstoreService(App);