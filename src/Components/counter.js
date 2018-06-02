import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import counterStyle from './counterStyle'
import { increment, decrement , reset } from "../Actions/index";

class Counter extends Component {
    render() {

        const { 
            mainView,
            titleView, 
            textSize,
            titleTextBig, 
            titleTextSmall, 
            contentView,
            btnText } = counterStyle;

        let { count } = this.props;

        return (
            <View style={mainView}>
                <View style={titleView}>
                    <Text style={titleTextBig}>REDUXIFY <Text style={titleTextSmall}>Counter App </Text>
                    </Text>
                </View>
                {/*Count Value*/}
                <View style={contentView}>
                    <Text style={textSize}>{count}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {/* Decrement Button*/}
                    <TouchableOpacity
                        style={[counterStyle.btn, { backgroundColor: '#f91b5e' }]}
                        onPress={this.props.decremented}>
                        <Text style={btnText}>Decrement</Text>
                    </TouchableOpacity>
                    {/* Reset Button*/}
                    <TouchableOpacity
                        style={[counterStyle.btn, { marginHorizontal: 4, backgroundColor: '#00d77d'} ]}
                        onPress={this.props.reseted}>
                        <Text style={btnText}>Reset</Text>
                    </TouchableOpacity>
                {/*Add button */}
                    <TouchableOpacity
                        style={counterStyle.btn}
                        onPress={this.props.incremented}>
                        <Text style={btnText}>Increment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ CounterReducers:{count}}) => ({count})

const mapDispatchToProps = (dispatch) => ({
incremented:() => dispatch(increment()),
decremented:() => dispatch(decrement()),
reseted:()=> dispatch(reset())
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);