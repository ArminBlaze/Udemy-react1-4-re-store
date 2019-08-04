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
    case 'FETCH_BOOKS_REQUEST': {
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      }
    }

    case 'FETCH_BOOKS_SUCCESS': {
      return {
        ...state,
        books: action.value,
        loading: false,
        error: null,
      }
    }

    case 'FETCH_BOOKS_FAILURE': {
      return {
        ...state,
        books: [],
        loading: false,
        error: action.value,
      }
    }

    case 'BOOK_ADDED_TO_CART': {
      const bookId = action.value;
      const book = state.books.find( (book) => book.id === bookId );
      //сначала надо искать есть ли эта книга в cartItems
      let idx = findCartIndex(state.cartItems, bookId);
      const oldItem = state.cartItems[idx];

      const newItem = updateItem(oldItem, book);
      let newCart = updateCartItems(state.cartItems, newItem, idx);

      return {
        ...state,
        cartItems: newCart,
      }
    }

    case 'BOOK_PLUS_COUNT': {
      const bookId = action.value;
      let idx = findCartIndex(state.cartItems, bookId);
      const oldItem = state.cartItems[idx];
      const newItem = updateCount(oldItem, 1)

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, idx)
      }
    } 

    case 'BOOK_MINUS_COUNT': {
      const bookId = action.value;
      let idx = findCartIndex(state.cartItems, bookId);
      const oldItem = state.cartItems[idx];
      const newItem = updateCount(oldItem, -1);

      let newCart = (newItem.count <= 0) ?
      deleteFromCart(state.cartItems, idx) :
      updateCartItems(state.cartItems, newItem, idx);

      return {
        ...state,
        cartItems: newCart
      }
    } 

    case 'BOOK_DELETE_FROM_CART': {
      const bookId = action.value;
      let idx = findCartIndex(state.cartItems, bookId);

      return {
        ...state,
        cartItems: deleteFromCart(state.cartItems, idx)
      }
    } 
    
    default: 
      return state;
  }

}


function findCartIndex(cartItems, bookId) {
  return cartItems.findIndex( (item) => item.id === bookId);
}


function updateCount(oldItem, value) {
  const count = oldItem.count + value;
  const price = oldItem.total / oldItem.count;

  return {
    ...oldItem,
    count: count,
    total: price * count,
  }
}


function updateItem (oldItem, book) {
  const count = (oldItem) ? oldItem.count + 1 : 1;

  return {
    id: book.id,
    title: book.title,
    count: count,
    total: book.price * count,
  };
}


function deleteFromCart (cartItems, i) {
  return [
    ...cartItems.slice(0, i),
    ...cartItems.slice(i+1) //без второго аргумента = до конца.
  ]
}


function updateCartItems (cartItems, item, i) {
  if(i === -1) {
    return [...cartItems, item]
  }
  
  return [
      ...cartItems.slice(0, i),
      item,
      ...cartItems.slice(i+1) //без второго аргумента = до конца.
    ]
}


export default reducer;