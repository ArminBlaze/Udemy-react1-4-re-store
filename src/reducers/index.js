const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 250,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      }

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.value,
        loading: false,
        error: null,
      }


    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.value,
      }

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.value;
      const book = state.books.find( (book) => book.id === bookId );
      //сначала надо искать есть ли эта книга в cartItems
      let idx;
      const oldItem = state.cartItems.find( (item, i) => {
        let result = false;
        if(item.id === bookId) {
          idx = i;
          result = true;
        }
        return result
      });
    
      const count = (oldItem) ? oldItem.count + 1 : 1;

      const newItem = {
        id: book.id,
        title: book.title,
        count: count,
        total: book.price * count,
      };

      let cartItems = state.cartItems;


      let newCart;
      if(oldItem) {
        newCart = [].concat(cartItems.slice(0, idx), newItem, cartItems.slice(idx+1, cartItems.length));
      }
      else {
        newCart = [...cartItems, newItem];
      }

      console.log(newCart);

      return {
        ...state,
        cartItems: newCart,
      }
      
    
    default: 
      return state;
  }

}

export default reducer;