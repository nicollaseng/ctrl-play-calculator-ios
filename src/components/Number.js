import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default props => (
    <View style={generalView}>
        <TextInput placeholder="Primeiro Numero" style={textInputStyle}/>
        <TextInput placeholder="Segundo Numero" style={textInputStyle}/>
    </View>
)


const styles = StyleSheet.create({
  generalView: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  textInputStyle: {
      height: 60,
      width: 200,
      margin: 10,
  }
});

const {generalView, textInputStyle} = styles
