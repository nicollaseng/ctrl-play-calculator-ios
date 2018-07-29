import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

const logo = require('../../img/logo.png')

export default props => (
    <View style={generalView}>
        <Image source={logo} style={imageStyle}/>
        <View>
          <Text style={textStyle}>Calculadora Play</Text>
        </View>
    </View>
)


const styles = StyleSheet.create({
  imageStyle: {
    width: 240,
    height: 100
  },
  generalView: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle:{
    fontSize: 50,
    color: '#ff6600',
    fontWeight: 'bold',
    fontFamily: 'BEARHUGSBYRATTICSASSIN-Regular'
  }
});

const {imageStyle, generalView, textStyle} = styles

