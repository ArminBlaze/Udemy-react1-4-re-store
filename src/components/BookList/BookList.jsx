import React, { Component } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';


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

export default BookList;