import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import counterStyle from './counterStyle'
import { increment, decrement , reset } from "../Actions/index";

class Counter extends Component {
    render() {
        return (
            <View style={{ paddingVertical: 6 }}>
                {/*Count Value*/}
                <Text style={counterStyle.textSize}>{this.props.count}</Text>
                {/*Add button */}
                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                    <TouchableOpacity
                        style={counterStyle.btn}
                        onPress={this.props.incremented}>
                        <Text style={{ color: '#e8e8e8', fontSize: 18 }}>Increment</Text>
                    </TouchableOpacity>
                    {/* Decrement Button*/}
                    <TouchableOpacity
                        style={counterStyle.btn}
                        onPress={this.props.decremented}>
                        <Text style={{ color: '#e8e8e8', fontSize: 18 }}>Decrement</Text>
                    </TouchableOpacity>
                    {/* Reset Button*/}
                    <TouchableOpacity
                        style={counterStyle.btn}
                        onPress={this.props.reseted}>
                        <Text style={{ color: '#e8e8e8', fontSize: 18 }}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    count:state.CounterReducers.count
})

const mapDispatchToProps = (dispatch) => ({
incremented:() => dispatch(increment()),
decremented:() => dispatch(decrement()),
reseted:()=> dispatch(reset())
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);