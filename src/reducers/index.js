const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.value,
      }
    
    default: 
      return state;
  }

}

export default reducer;