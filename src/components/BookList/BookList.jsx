import React, { Component } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import { connect } from 'react-redux';
import withBookstoreService from 'hocs/withBookstoreService';
import { fetchBooks, bookAddedToCart } from 'actions';
import compose from 'utils/compose';
import './BookList.css';
import Spinner from 'components/Spinner/Spinner';
import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';


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
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    // onAddToCart: (id) => console.log(id),
    onAddToCart: (id) => dispatch( bookAddedToCart(id) ),
  }
};

export default compose(
  withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
