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
  AsyncStorage,
  RefreshControl,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { WeatherWidget } from 'react-native-weather';
import Icon from 'react-native-vector-icons/FontAwesome';
import PTRView from 'react-native-pull-to-refresh';

export default class App extends Component{
  static navigationOptions  = {
    headerLeft : null,
    title  : 'SIM UKS',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'white' },
  }

  constructor(){
    super()

    this.state = {
      name : '',
      email : '',
      token : '',
      data : [],
      dataToday : [],
      refreshing: true
    }
    AsyncStorage.getItem('name', (error, result) => {
      if (result) {
        this.setState({
          name: result,
        })
      }
    })

    AsyncStorage.getItem('email', (error, result) => {
      if (result) {
        this.setState({
          email: result,
        })
      }
    })

    AsyncStorage.getItem('token', (error, result) => {
      if (result) {
        this.setState({
          token: result,
        })
      }
    })
  }

  

  countSiswa(){
    return fetch('http:/10.1.20.60/simuks/public/count-all-siswa')
        .then((response) => response.json())
        .then((res) => {
          this.setState({ 
            refreshing: false,
            data: res.values,
          })
         console.log('jumlah siswa',this.state.data)
        }).catch((error) => {
          console.log(error)
          alert(responseJson.result)
        })
  }

  countSiswaToday(){
    return fetch('http:/10.1.20.60/simuks/public/count-today-siswa')
        .then((response) => response.json())
        .then((res) => {
          this.setState({ 
            refreshing: false,
            dataToday: res.values,
          })
         console.log('jumlah today siswa',this.state.dataToday)
        }).catch((error) => {
          console.log(error)
          alert(responseJson.result)
        })
  }

  /* onRefresh() {
    //Clear old data of the list
    
    this.countSiswa()
  }
 */
  componentDidMount() {
    this.countSiswa()
    this.countSiswaToday()
  }

  render(){
    return(
      <ScrollView
      >
        <View style={styles.container}>
        <TouchableOpacity 
        disabled={true}
        style={{
          borderRadius : 10,
          height : 50,
          width : '100%',
          backgroundColor : 'white'
        }}>
        <WeatherWidget
          api={"910e3b40c572f04cf6cb866bd95621a8"}
          lat={"-6.595038"}
          lng={"106.816635"}
          />
        </TouchableOpacity>
        <TouchableOpacity
         style={{
          marginTop : 20,
          width :  '90%',
          borderRadius :  10,
          padding : 10,
          height : 90,
          backgroundColor : 'white',
          shadowColor: 'rgba(0,0,0, .4)', // IOS
          shadowOffset: { height: 1, width: 1 }, // IOS
          shadowOpacity: 1, // IOS
          shadowRadius: 1, //IOS
          elevation: 2, // Android,
        
        }}>
          <Text style={{fontSize : 17 , 
            fontFamily : 'Futura' ,
            marginBottom :  10,
            fontWeight : 'bold',
            }}>Halo , </Text>
            <Text style={{fontSize : 17 , 
            fontFamily : 'Futura' ,
            fontWeight : 'bold'
            }}>{this.state.name}</Text>
            <Image
                style={{
                  right : 0,
                  margin : 15,
                  position : 'absolute',
                  width : 70,
                  height : 70
                }}
                source={require('./../img/user.png')}
              />
        </TouchableOpacity>
      
              
        <View style={{flexDirection : 'row'}}>
          <TouchableOpacity style={{
            width : 140,
            height : 120,
            margin : 20,
            alignItems : 'center',
            backgroundColor : 'white',
            borderRadius :10,
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android,
          }}>
          <Text style={{
            fontSize : 15,
            fontWeight : 'bold',
            marginTop : 10,
            fontFamily : 'Futura-Medium'
          }}>Today Patient</Text>
          <Text style={{
            fontSize : 25,
            fontWeight : 'bold',
            marginTop : 30,
            fontFamily : 'Futura-Medium'
          }}>{this.state.dataToday}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width : 140,
            height : 120,
            margin : 20,
            alignItems : 'center',
            backgroundColor : 'white',
            borderRadius :10,
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android,
          }}>
          <Text style={{
            fontSize : 15,
            fontWeight : 'bold',
            marginTop : 10,
            fontFamily : 'Futura-Medium'
          }}>Total Patient</Text>
          <Text style={{
            fontSize : 25,
            fontWeight : 'bold',
            marginTop : 30,
            fontFamily : 'Futura-Medium'
          }}>{this.state.data}</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection : 'row'}}>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('AddSiswa')}
          style={{
            width : '90%',
            height : 50,
            margin : 20,
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : 'red',
            borderRadius :10,
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android,
          }}>
            <View style={{flexDirection : 'row'}}>
            <Icon name="plus" size={20} color="#fff" />
              <Text style={{
                fontSize : 14,
                marginLeft : 10,
                color : 'white',
                fontWeight : 'bold',
                fontFamily : 'Futura'
              }}>Tambah siswa</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection : 'row'}}>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('ShowSiswa')}
          style={{
            width : '90%',
            height : 50,
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : 'red',
            borderRadius :10,
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android,
          }}>
            <View style={{flexDirection : 'row'}}>
            <Icon name="eye" size={20} color="#fff" />
              <Text style={{
                fontSize : 14,
                marginLeft : 10,
                
                color : 'white',
                fontWeight : 'bold',
                fontFamily : 'Futura'
              }}>Lihat Data siswa</Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
      </ScrollView>
    )
  }
}

let styles =  StyleSheet.create({
  container  : {
    flex : 1,
    alignItems : 'center'
  }
})