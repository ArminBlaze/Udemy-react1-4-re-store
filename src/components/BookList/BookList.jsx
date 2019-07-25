import React, { Component } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import { connect } from 'react-redux';
import withBookstoreService from 'hocs/withBookstoreService';
import { booksRequested, booksLoaded, booksError } from 'actions';
import compose from 'utils/compose';
import './BookList.css';
import Spinner from 'components/Spinner/Spinner';
import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';


class BookList extends Component {

  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then( (data) => booksLoaded(data) )
      .catch( (err) => booksError(err) )
    
  }

  render() {
    const {books, loading, error} = this.props;

    if(loading) return <Spinner />
    if(error) return <ErrorIndicator />
    
    return (
      <ul className='BookList'>
        {
          books.map((item) => <li key={item.id}><BookListItem book={ item } /></li>)
        }
      </ul>
    )
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error,
  }
};

const mapDispatchToProps = {
  booksRequested,
  booksLoaded,
  booksError,
};

export default compose(
  withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService( connect(mapStateToProps, actions)(BookList) );
