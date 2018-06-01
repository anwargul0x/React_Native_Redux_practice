import React,{Component} from 'react';
import Counter from './src/Components/counter';
import { Provider } from 'react-redux';
import store from './src/Store';

export default class App extends Component{

    render(){
        return(
            <Provider store={store}>
              <Counter/>  
            </Provider> )
             }
}