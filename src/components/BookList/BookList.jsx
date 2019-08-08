import React, { Component } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import { connect } from 'react-redux';
import withBookstoreService from 'hocs/withBookstoreService';
import { fetchBooks, bookAddedToCart } from 'actions';
import compose from 'utils/compose';
import './BookList.css';
import Spinner from 'components/Spinner/Spinner';
import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';
import {bindActionCreators} from 'redux';


class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddToCart} = this.props;

    if(loading) return <Spinner />
    if(error) return <ErrorIndicator />
    
    return <BookList books={books} onAddToCart={onAddToCart}/>
  }
}

function BookList ({books, onAddToCart}) {
  return (
    <ul className='BookList'>
      {
        books.map((item) => <li key={item.id}>
          <BookListItem
            book={ item }
            onAddToCart={ () => onAddToCart(item.id) } />
        </li>)
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  const {books, loading, error} = state.bookList;

  return {
    books,
    loading,
    error,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return bindActionCreators({
    // fetchBooks: fetchBooks(dispatch, bookstoreService),
    fetchBooks: fetchBooks(bookstoreService),
    onAddToCart: bookAddedToCart,
  }, dispatch)
};

export default compose(
  withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
