import React, {Component} from 'react';
import {
  Picker,
  StyleSheet,
  View
} from 'react-native';

export default class Operation extends Component {
    render(){
        return(
            <Picker itemStyle={generalPicker} selectedValue={this.props.operation}
                    onValueChange={value => this.props.updateOperation(value)}>
                <Picker.item label="Soma" value="soma"/>
                <Picker.item label="Subtracao" value="subtracao"/>
                <Picker.item label="Multiplicação" value="multiplicacao"/>
                <Picker.item label="Divisão" value="divisao"/>
            </Picker>
        )
    }
}

const styles = StyleSheet.create({
    generalPicker: {
        marginTop: -40,
        marginBottom: 40
    }
  });
  
  const {generalPicker} = styles

