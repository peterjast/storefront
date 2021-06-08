import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import category from './categories.js';
import cart from './cart.js';

let reducers = combineReducers({ category, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();