const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.value,
        loading: false,
      }
    
    default: 
      return state;
  }

}

export default reducer;