import React, { Component } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import { connect } from 'react-redux';
import withBookstoreService from 'hocs/withBookstoreService';
import * as actions from 'actions';
import compose from 'utils/compose';
import './BookList.css';
import Spinner from 'components/Spinner/Spinner';
// import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';


class BookList extends Component {

  componentDidMount() {
    const {bookstoreService} = this.props;
    bookstoreService.getBooks()
      .then( (data) => this.props.booksLoaded(data) )
    
  }

  render() {
    const {books, loading} = this.props;

    if(loading) return <Spinner />
    
    return (
      <ul className='BookList'>
        {
          books.map((item) => <li key={item.id}><BookListItem book={ item } /></li>)
        }
      </ul>
    )
  }
}

const mapStateToProps = ({books, loading}) => {
  return {
    books,
    loading,
  }
};

export default compose(
  withBookstoreService,
  connect(mapStateToProps, actions)
)(BookList);

// export default withBookstoreService( connect(mapStateToProps, actions)(BookList) );
