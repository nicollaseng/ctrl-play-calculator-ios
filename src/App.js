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
  constructor(props){
    super(props)
    this.state = {
      num1: '',
      num2: '',
      operation: ''
    }
    this.calculate = this.calculate.bind(this)
    this.inputUpdate = this.inputUpdate.bind(this)
    this.updateOperation = this.updateOperation.bind(this)
  }

  calculate(){
    var result

    if(this.state.operation === 'soma'){
      result = parseFloat(this.state.num1) + parseFloat(this.state.num2)
    }else if(this.state.operation === 'subtracao'){
      result = parseFloat(this.state.num1) - parseFloat(this.state.num2)
    }if(this.state.operation === 'multiplicacao'){
      result = parseFloat(this.state.num1) * parseFloat(this.state.num2)
    }if(this.state.operation === 'divisao'){
      result = parseFloat(this.state.num1) / parseFloat(this.state.num2)
    }

    console.log(result)
  }

  inputUpdate(num,value){
    var obj = {}
    obj[num]=value
    this.setState(obj)
  }

  updateOperation(opr){
    this.setState({operation:opr})
  }

  render() {
    return (
        <View>
            <Header />
            <Result />
            <Number update ={this.inputUpdate}
                 var1={this.state.num1.toString()} 
                 var2={this.state.num2.toString()}
                 name1={'num1'}
                 name2={'num2'}/>
            <Operation operation={this.state.operation} 
                      updateOperation={this.updateOperation}/>
            <Action calculate={this.calculate}/>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({

});

