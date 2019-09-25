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
  Picker,
  View,
  TouchableOpacity,
  Animated,
  Text,
  AsyncStorage,
} from 'react-native';


import { Dropdown } from 'react-native-material-dropdown';

let data = [{
    value: 'Pusing',
  }, {
    value: 'Mual',
  }, {
    value: 'Sakit Perut',
  }];

let rombel = [{
  value: 'RPL-1',
}, {
  value: 'RPL-2',
}, {
  value: 'RPL-3',
},
{
  value: 'RPL-4',
}];

export default class AddSiswa extends Component{
    state = {
        alasan : '',
        nama : '',
        umur : '',
        keterangan : '',
        rombel : ''
    }
    static navigationOptions  = {
        title  : 'Tambah Siswa',
        headerTintColor : 'white',
        headerBackTitle: null,
        headerStyle: { backgroundColor: 'red' },
        headerTitleStyle: { color: 'white' },
      }

      saveData(){
        fetch('http://10.1.20.60/simuks/public/store-siswa', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            nama_siswa: this.state.nama,
        
            umur: this.state.umur,
        
            alasan: this.state.alasan,

            keterangan: this.state.keterangan,

            rombel: this.state.rombel,
        
          })
        
        })
        .then((responseJson) => {
          Alert.alert('Data tersimpan !');
          this.props.navigation.navigate('ShowSiswa')
        }).catch((error) => {
          console.error('error bos',error);
        });
        
      }

      submit(){
        if(this.state.nama.length == 0 ||this.state.umur.length == 0||this.state.rombel.length == 0||this.state.alasan.length == 0 ){
          Alert.alert('Mohon Lengkapi Data !')
        }else{
          this.saveData()
        }
      }

    render(){
        return(
            <View style={styles.container}>
              <TouchableOpacity
              disabled={true}
                  style={{
                    marginTop : 10,
                      width : '95%',
                      borderRadius : 10,
                      height : 80,
                      justifyContent : 'center',
                      backgroundColor : 'white',
                      padding : 10
                  }}
                >
                <TextInput
                  placeholder="Nama Siswa"
                  onChangeText={(nama) => this.setState({ nama })}
                  style={{ height: 40, paddingLeft : 20 , borderColor: 'gray', borderRadius : 10 ,borderWidth: 1 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                disabled={true}
                  style={{
                    marginTop : 10,
                      width : '95%',
                      borderRadius : 10,
                      height : 80,
                      justifyContent : 'center',
                      backgroundColor : 'white',
                      padding : 10,
                      shadowColor: 'rgba(0,0,0, .4)', // IOS
                      shadowOffset: { height: 1, width: 1 }, // IOS
                      shadowOpacity: 1, // IOS
                      shadowRadius: 1, //IOS
                      elevation: 2, // Android,
                  }}
                >
                <TextInput
                  placeholder="Umur Siswa"
                  onChangeText={(umur) => this.setState({ umur })}
                  style={{ height: 40, paddingLeft : 20 , borderColor: 'gray', borderRadius : 10 ,borderWidth: 1 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
               disabled={true}
                style={{
                  marginTop : 10,
                    width : '95%',
                    borderRadius : 10,
                    height : 80,
                    justifyContent : 'center',
                    backgroundColor : 'white',
                    padding : 10,
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android,
                }}
               >
               <Dropdown
                    label='Pilih Rombel'
                    onChangeText={(rombel)=>this.setState({rombel})}
                    data={rombel}
                />
               </TouchableOpacity>
               <TouchableOpacity
               disabled={true}
                style={{
                  marginTop : 10,
                    width : '95%',
                    borderRadius : 10,
                    height : 80,
                    justifyContent : 'center',
                    backgroundColor : 'white',
                    padding : 10,
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android,
                }}
               >
               <Dropdown
                    label='Pilih alasan'
                    onChangeText={(alasan)=>this.setState({alasan})}
                    data={data}
                />
               </TouchableOpacity>
               <TouchableOpacity
               disabled={true}
                  style={{
                    marginTop : 10,
                      width : '95%',
                      borderRadius : 10,
                      height : 80,
                      justifyContent : 'center',
                      backgroundColor : 'white',
                      padding : 10,
                      shadowColor: 'rgba(0,0,0, .4)', // IOS
                      shadowOffset: { height: 1, width: 1 }, // IOS
                      shadowOpacity: 1, // IOS
                      shadowRadius: 1, //IOS
                      elevation: 2, // Android,
                  }}
                >
                <TextInput
                  placeholder="Keterangan ( optional )"
                  onChangeText={(keterangan) => this.setState({ keterangan })}
                  style={{ height: 40, paddingLeft : 20 , borderColor: 'gray', borderRadius : 10 ,borderWidth: 1 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>this.submit()}
                  style={{
                     marginTop : 10,
                      width : '95%',
                      borderRadius : 10,
                      alignItems : 'center',
                      bottom : 0,
                      position  : 'absolute',
                      marginBottom : 60,
                      height : 50,
                      justifyContent : 'center',
                      backgroundColor : 'red',
                      padding : 10,
                      shadowColor: 'rgba(0,0,0, .4)', // IOS
                      shadowOffset: { height: 1, width: 1 }, // IOS
                      shadowOpacity: 1, // IOS
                      shadowRadius: 1, //IOS
                      elevation: 2, // Android,
                  }}
                >
                  <Text style={{
                    fontSize : 12,
                    fontWeight : 'bold',
                    color : 'white',
                    fontFamily : 'Futura'
                  }}>Simpan Data</Text>
                </TouchableOpacity> 
            </View>
        )
    }
}

let styles = StyleSheet.create({
  container : {
    flex :  1,
    alignItems: 'center'
  }
})