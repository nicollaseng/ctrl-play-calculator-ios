import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default props => (
    <View style={generalView}>
        <TextInput placeholder="Resultado" style={textInputStyle}/>
    </View>
)


const styles = StyleSheet.create({
  generalView: {
      flex:1,
      marginTop: 20,
      marginBottom: 50,
      marginLeft: 10
  },
  textInputStyle: {
      height: 60
  }
});

const {generalView, textInputStyle} = styles
