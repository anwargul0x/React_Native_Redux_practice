import { createStore } from 'redux';
import rootReducer from '../Reducers/index';

let store = createStore(rootReducer);

export default store;