import React, { Component } from 'react';
import Header from './components/Header.js'
import Result from './components/Result.js'
import Number from './components/Number.js'
import Action from './components/Action.js'
import Operation from './components/Operation.js'
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
            <Header />
            <Result />
            <Number />
            <Operation />
            <Action />
            
        </View>
    );
  }
}

const styles = StyleSheet.create({

});

