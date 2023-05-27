import { createStore } from 'redux';
import CartReducer from './reducer';

const store = createStore(CartReducer);

export default store;