import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyClpemOHu7ARqG7Ee41cX0rskJjFhTN2KY",
            authDomain: "molten-catalyst-594.firebaseapp.com",
            databaseURL: "https://molten-catalyst-594.firebaseio.com",
            projectId: "molten-catalyst-594",
            storageBucket: "",
            messagingSenderId: "864423037109"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm>An App!</LoginForm>
            </View>
        );
    }
}

export default App;
