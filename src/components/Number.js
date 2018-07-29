import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default props => (
    <View style={generalView}>
        <TextInput placeholder="Primeiro Numero" 
                    value={props.var1 } style={textInputStyle}
                    onChangeText={value => props.update(props.name1,value)}/>
        <TextInput placeholder="Segundo Numero" 
                    value={props.var2} style={textInputStyle} 
                    onChangeText={value => props.update(props.name2,value)}/>
    </View>
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
      fontSize: 17,
      color: 'grey'
  }
});

const {generalView, textInputStyle} = styles
