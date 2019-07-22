import React, { Component } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import { connect } from 'react-redux';

class BookList extends Component {

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

export default connect(mapStateToProps)(BookList);