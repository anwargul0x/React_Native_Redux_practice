import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Counter extends Component {
constructor(props){
    super(props);
}
    render() {
        return (
            <View>
                {/*Count Value*/}
                <Text>{this.props.counter}</Text>
                {/*Add button */}
                <TouchableOpacity >
                    <Text>Increment</Text>
                </TouchableOpacity>
                {/* Decrement Button*/}
                <TouchableOpacity>
                    <Text>Decrement</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    count:state.CounterReducers.count
})
const mapDispatchToProps = (dispatch) => ({
increment:() => dispatch(),
decrement:() => dispatch(),
reset:()=>{}

})
export default Counter;