import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducers';
import thunkMiddleware from 'redux-thunk';


const logMiddleware = store => dispatch => (action) => {
  console.log(action.type);
  return dispatch(action);
}

const stringMiddleware = store => dispatch => (action) => {
  if(typeof action === 'string') {
    return dispatch({
      type: action
    })
  }
  
  return dispatch(action);
}

	
const store = createStore(reducer, 
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware) );
  
store.dispatch('HELLO_WORLD');

// const myAction = (dispatch) => {
//   setTimeout( () => dispatch({
//     type: 'DELAYED_ACTION'
//   })
//   , 2000)
// };

// store.dispatch( myAction );

const delayedActionCreator = (sec) => (dispatch) => {
  setTimeout( () => dispatch({
    type: 'DELAYED_ACTION'
  })
  , sec*1000)
}

store.dispatch( delayedActionCreator(5) );

export default store;