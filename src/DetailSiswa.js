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
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Body, Subtitle ,Text,Input ,Button, Icon, Card , CardItem , Right , Left} from 'native-base';
import { Grid , Row , Col } from 'react-native-easy-grid';



export default class AddSiswa extends Component{
    constructor(props){
      super(props)
      this.state  = {
        data : [],
        Textid : '',
        isLoading: true,
        nama_siswa : '',
        umur : '',
        keterangan : '',
        alasan : '',
        rombel : ''
      }
    }
    static navigationOptions  = {
        title  : 'Lihat Detail Siswa',
        headerTintColor : 'white',
        headerBackTitle: null,
        headerStyle: { backgroundColor: 'red' },
        headerTitleStyle: { color: 'white' },
      }

      getSiswa(){
        const { params } = this.props.navigation.state;
        return fetch('http:/10.1.20.60/simuks/public/get-siswa/' + params.id)
            .then((response) => response.json())
            .then((res) => {
              this.setState({ 
                isLoading: false,
                data: res.values,
              })
             console.log('data siswa id',this.state.data)
            }).catch((error) => {
              console.log(error)
              alert(responseJson.result)
            })
      }

      componentDidMount() {
        this.setState({
          Textid : this.props.navigation.state.params.id
        })
        this.getSiswa()
      }

      deleteSiswa(){
        const { params } = this.props.navigation.state;
        fetch('http:/10.1.20.60/simuks/public/delete-siswa/' + params.id, {
          method: 'DELETE',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id : params.id
          })
        
          })
          .then((responseJson) => {
            this.props.navigation.navigate('Home')
            Alert.alert('Berhasil','data terhapus !')
          }).catch((error) => {
             console.error(error);

          });
 
         
      }

      updateStatus(){
        const { params } = this.props.navigation.state;
        fetch("http:/10.1.20.60/simuks/public/update-siswa/" + params.id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          id : params.id
        })
      })
        
        .then((responseJson) => {
          // Showing response message coming from server updating records.
          this.props.navigation.navigate('Home')
          Alert.alert('Siswa telah pulang !');
        })
        .catch((error) => {
          console.error(error);
        });
      }

      alertConfirm(){
        Alert.alert(
          'Yakin mau hapus ?',
          'data tidak akan bisa kembali',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => this.deleteSiswa()},
          ],
          {cancelable: false},
        );
      }

     
    render(){
        const { params } = this.props.navigation.state;
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
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem={({item}) => 
              <TouchableOpacity
                disabled={true}
                style={{
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    elevation: 2, // Android,
                    width : '100%',
                    borderRadius : 10,
                    height  : 160,
                    padding : 20,
                    backgroundColor: 'white',
                    marginTop : 10,
                }}>
                <View style={{alignItems : 'center'}}>
                <Image
                  style={{
                    width : 100,
                    height : 100,
                  }}
                  source={require('./../img/user.png')}
                />
                </View>
                <View style={styles.bodyContent}>
                <Card>
                    <CardItem header>
                        <Text style={{ fontWeight: 'bold' , fontSize : 16}}>Data siswa</Text>
                    </CardItem>

                    <CardItem>
                      <Icon active name="person" />
                      <Text>{item.nama_siswa}</Text>
                    </CardItem>  

                     <CardItem>
                      <Icon active name="timer" />
                      <Text>{item.umur} Tahun</Text>
                    </CardItem>   

                    <CardItem>
                      <Icon active name="home" />
                      <Text>{item.rombel}</Text>
                    </CardItem> 

                    <CardItem>
                      <Icon active name="medkit" />
                      <Text>{item.alasan}</Text>
                    </CardItem>

                     <CardItem>
                      <Icon active name="time" />
                      <Text>{item.created_at}</Text>
                    </CardItem>  

                     <CardItem>
                      <Icon active name="time" />
                      {
                        item.status == 'pulang' ?
                        <Text>Pulang</Text>
                        :
                        <Text>Menginap</Text>
                      }
                    </CardItem>  
                    {
                      item.status == 'pulang' ?
                      <CardItem>
                      <Icon active name="time" />
                      <Text>{item.updated_at}</Text>
                    </CardItem> 
                    :
                    <View></View>
                    } 
                </Card>
                  {
                    item.status == 'pulang' ?
                    <View></View>
                    :
                    <Button 
                      onPress={()=>{
                        this.updateStatus()
                      }}
                      style={{ marginTop : 20}}>
                      <Text style={{
                        marginLeft : 110
                      }}>Pulang</Text>
                    </Button>
                  }
                  <Button 
                      danger
                      onPress={()=>{
                        this.alertConfirm()
                      }}
                      style={{ marginTop : 20}}>
                      <Text style={{
                        marginLeft : 110
                      }}>Hapus</Text>
                    </Button>
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
  },
  bodyContent : {
    marginTop : 50
  }
})