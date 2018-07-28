import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho.js'
import Resultado from './components/Resultado.js'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View>
            <Cabecalho />
            <Resultado />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

