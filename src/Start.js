import React from 'react';
import SplashScreen from './SplashScreen';

import App from './../App'

export default class Application extends React.Component {

    componentWillMount() {
        this.state = {
            view : <SplashScreen />
        };


        setTimeout(() => {
            //IF FALSE NAVIGATE TO ERROR
            if(true) {
                this.setState({
                    view : <App/>
                })
            } 
        }, 2000) //TIME OF WAITING


    }

    render() {
        return (
            this.state.view
        )
    }
}