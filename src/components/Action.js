import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

export default props => (
    <View style={generalView}>
        <TouchableOpacity style={touchableStyle} onPress={props.calculate}>
            <Text style={textInputStyle}>Calcular</Text>
        </TouchableOpacity>
    </View>
)


const styles = StyleSheet.create({
  generalView: {
    alignItems: 'center',
    marginVertical: 0
  },
  textInputStyle: {
    color: 'white',
    backgroundColor: '#ff6600',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20
  },
  touchableStyle: {
      borderRadius: 20,
      borderWidth: 5,
      borderColor: '#ff6600'
  }
});

const {generalView, textInputStyle, touchableStyle} = styles
