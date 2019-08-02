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
      let idx = state.cartItems.findIndex( (item) => item.id === bookId)
      const oldItem = state.cartItems[idx];

      const newItem = updateItem(oldItem, book);
      let newCart = updateCartItems(state.cartItems, newItem, idx);

      return {
        ...state,
        cartItems: newCart,
      }
      
    
    default: 
      return state;
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


function updateCartItems (cartItems, item, i) {
  if(i === undefined) {
    return [...cartItems, item]
  }
  
  return [
      ...cartItems.slice(0, i),
      item,
      ...cartItems.slice(i+1) //без второго аргумента = до конца.
    ]
}


export default reducer;