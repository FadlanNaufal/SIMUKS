import React , {Component}from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Login from './Login'
import Home from './Home'
import AddSiswa from './AddSiswa'
import ShowSiswa from './ShowSiswa'
import DetailSiswa from './DetailSiswa'

console.disableYellowBox = true;

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Login:  Login,
        Home : Home,
        AddSiswa : AddSiswa,
        ShowSiswa : ShowSiswa,
        DetailSiswa : DetailSiswa
    }
);



export default class App extends  Component{
    render(){
        return(
            <RootStack/>
        )
    }
}