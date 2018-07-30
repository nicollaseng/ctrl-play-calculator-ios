import React from 'react';
import DoneButton from 'react-native-keyboard-done-button'
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
  TextInput
} from 'react-native'

var dismissKeyboard = require('dismissKeyboard')

export default props => (
    
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()} accessible={false}>
    <View style={generalView}>

        <TextInput placeholder="0" 
                    value={props.var1 } style={textInputStyle}
                    onChangeText={value => props.update(props.name1,value)}
                    keyboardType={'number-pad'}
                    onSubmitEditing={Keyboard.dismiss}/>
        <TextInput placeholder="0" 
                    value={props.var2} style={textInputStyle} 
                    onChangeText={value => props.update(props.name2,value)}
                    keyboardType={'number-pad'} 
                    onSubmitEditing={Keyboard.dismiss}
                    />
    </View>
    </TouchableWithoutFeedback>
)


const styles = StyleSheet.create({
  generalView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  textInputStyle: {
      height: 60,
      width: 200,
      margin: 10,
      fontSize: 30,
      color: '#ff6600',
      fontWeight: 'bold'
  }
});

const {generalView, textInputStyle} = styles
