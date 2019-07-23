import React, { Component } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import { connect } from 'react-redux';
import withBookstoreService from 'hocs/withBookstoreService';
import * as actions from 'actions';
import compose from 'utils/compose';


class BookList extends Component {

  componentDidMount() {
    const {bookstoreService} = this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
    
    return (
      <ul>
        {
          books.map((item) => <li key={item.id}><BookListItem book={ item } /></li>)
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
};

export default compose(
  withBookstoreService,
  connect(mapStateToProps, actions)
)(BookList);

// export default withBookstoreService( connect(mapStateToProps, actions)(BookList) );
