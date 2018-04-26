import { CombineReducers, combineReducers } from 'redux';
import CounterReducers from './countReducers';

let rootReducer = combineReducers({
    CounterReducers, 
})

export default rootReducer;