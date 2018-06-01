import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET} from '../Actions/ActionTypes';

const initialState = { count: 0 };
 const CounterReducers  = ( state = initialState , action ) => {
switch(action.type){
    case COUNTER_INCREMENT:
        return { ...state, count: state.count + 1 }; 
    case COUNTER_DECREMENT:
        return  { ...state,count: state.count - 1 }; 
    case COUNTER_RESET:
        return {...state , count: 0};
    default:
        return state;

}
}
export default CounterReducers;