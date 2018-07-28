import React, {Component} from 'react';
import {
  Picker,
  StyleSheet,
  View
} from 'react-native';

export default class Operation extends Component {
    render(){
        return(
            <Picker>
                <Picker.item label="Soma" value="soma"/>
                <Picker.item label="Subtracao" value="subtracao"/>
                <Picker.item label="Multiplicação" value="multiplicacao"/>
                <Picker.item label="Divisão" value="divisao"/>
            </Picker>
        )
    }
}

