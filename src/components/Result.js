import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default props => (
    <View style={generalView}>
        <TextInput placeholder="0" style={textInputStyle}
                    value={props.result}/>
    </View>
)


const styles = StyleSheet.create({
  generalView: {
      flex:1,
      marginTop: 40,
      marginBottom: 50,
      marginLeft: 10
  },
  textInputStyle: {
      height: 60,
      fontSize: 50,
      color: '#0059b3'
  }
});

const {generalView, textInputStyle} = styles
