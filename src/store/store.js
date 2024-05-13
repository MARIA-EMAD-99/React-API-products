import { applyMiddleware, createStore } from "redux";
import {thunk} from 'redux-thunk'; // Import thunk correctly
import combineReducers from './combin'; // Import your combined reducer





const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;






// import { applyMiddleware, createStore } from "redux";
// import combineReducers from './combin';
// import {thunk} from 'redux-thunk'; // Import thunk from redux-thunk

// const store = createStore(combineReducers, applyMiddleware(thunk));

// export default store;




