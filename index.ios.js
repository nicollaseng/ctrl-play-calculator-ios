import React, { Component } from 'react';
import App from './src/App.js';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

export default class EasyCalculator extends Component {
  render() {
    return (
     <App />
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('EasyCalculator', () => EasyCalculator);
console.disableYellowBox = true;