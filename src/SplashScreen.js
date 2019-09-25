import React from 'react';
import { StatusBar ,SafeAreaView , View , Text ,Image, ActivityIndicator } from 'react-native';
export default class SplashScreen extends React.Component {
    render() {
        return (
            
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : 'white'}}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/>
                <Image
                    source={require('./../img/icon.png')}
                    style={{ width : 150 , height : 150 }}
                />
                <ActivityIndicator color={'red'}/>
                <Text style={{ color : 'red',fontSize : 15 , paddingTop : 20}}>Please Wait</Text>
            </View>
           
        )
    }
}