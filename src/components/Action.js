import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

export default props => (
    <View style={generalView}>
        <TouchableOpacity>
            <Text style={textInputStyle}>Calcular</Text>
        </TouchableOpacity>
    </View>
)


const styles = StyleSheet.create({
  generalView: {
    marginVertical: 100,
    alignItems: 'center',
    marginVertical: 200
  },
  textInputStyle: {
    color: 'white',
    backgroundColor: '#ff6600',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20
  }
});

const {generalView, textInputStyle} = styles
