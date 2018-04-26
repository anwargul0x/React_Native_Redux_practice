import * as Actions from '../Actions/ActionTypes';

const initialState = { count: 0 };

 const CounterReducers  = ( state = initialState , action ) => {
switch(action.type){
    case Actions.COUNT_INCREMENT:
        return Object.assign({}, state, { count: state.count + 1 }); 
    case Actions.COUNT_DECREMENT:
        return Object.assign({}, state, { count: state.count - 1 }); 
    case Actions.COUNT_RESET:
        return Object.assign({}, state, { count: 0 });
        default:
        return state;

}
}
export default CounterReducers;