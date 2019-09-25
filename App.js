/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './src/Router'

export default class App extends Component{
  render(){
    return(
      <Router/>
    )
  }
}

let styles = StyleSheet.create({
  container : {
    flex :  1,
    justifyContent  : 'center',
    alignItems: 'center'
  }
})