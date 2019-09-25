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
  Image,
  TextInput,
  ScrollView,
  Alert,
  Button,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

export default class AddSiswa extends Component{
    constructor(props){
      super(props)
      this.state  = {
        data : [],
        id : '',
        isLoading: true
      }
    }
    static navigationOptions  = {
        title  : 'Lihat Siswa',
        headerTintColor : 'white',
        headerBackTitle: null,
        headerStyle: { backgroundColor: 'red' },
        headerTitleStyle: { color: 'white' },
      }

      getSiswa(){
        return fetch('http:/10.1.20.60/simuks/public/get-all-siswa')
            .then((response) => response.json())
            .then((res) => {
              this.setState({ 
                isLoading: false,
                data: res.values,
              })
             console.log('data siswa',this.state.data)
            }).catch((error) => {
              console.log(error)
              alert(responseJson.result)
            })
      }

      componentDidMount() {
        this.getSiswa()
      }

      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#607D8B",
            }}
          />
        );
      }

    render(){
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
  
      return (
  
      <View style={styles.container}>
        
            <FlatList
            
                data={ this.state.data }
                renderItem={({item}) => 
                <TouchableOpacity
                  onPress={()=>{
                    this.props.navigation.navigate('DetailSiswa',{id : item.id})
                  }}
                  style={{
                      shadowColor: 'rgba(0,0,0, .4)', // IOS
                      shadowOffset: { height: 1, width: 1 }, // IOS
                      shadowOpacity: 1, // IOS
                      shadowRadius: 1, //IOS
                      elevation: 2, // Android,
                      width : '100%',
                      borderRadius : 10,
                      height  : 120,
                      padding : 20,
                      backgroundColor: 'white',
                      marginTop : 10,
                  }}>
                  <Image
                    style={{
                      left : 0,
                      margin : 15,
                      position : 'absolute',
                      width : 70,
                      height : 70
                    }}
                    source={require('./../img/user.png')}
                  />
                    <View style={{
                      marginLeft : 80,
                      margin : 10
                    }}>
                      <View style={{
                        flexDirection : 'row'
                      }}>
                        <Text style={{
                          fontSize : 16,
                          fontWeight : 'bold',
                        }}>{item.nama_siswa} </Text>
                       {
                         item.status == 'pulang' ?
                         <Badge 
                          status="error" />
                          :
                          <Badge 
                          status="success" />
                       }
                      </View>
                      <Text style={{
                        fontSize : 16,
                        marginTop : 4,
                        fontStyle : 'italic'
                      }}>{item.alasan} </Text>
                    {
                      item.status == 'pulang' ?
                      <TouchableOpacity
                      disabled={true}
                        style={{
                          marginTop : 10,
                          backgroundColor : 'red',
                          width : 76,
                          height : 25,
                          justifyContent : 'center',
                          alignItems : 'center',
                          borderRadius : 10
                        }}
                      >
                        <Text style={{color : 'white'}}>Pulang</Text>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity
                      disabled={true}
                      style={{
                        marginTop : 10,
                        backgroundColor : 'green',
                        width : 76,
                        height : 25,
                        justifyContent : 'center',
                        alignItems : 'center',
                        borderRadius : 10
                      }}
                     >
                      <Text style={{color : 'white'}}>Menginap</Text>
                     </TouchableOpacity>
                    }
                    </View>
                  </TouchableOpacity>
                }
      
                keyExtractor={(item, index) => index}
                
              />
          
          
      </View>
              
      );
    }
}

let styles = StyleSheet.create({
  container : {
    flex :  1,
    margin : 10,
  }
})