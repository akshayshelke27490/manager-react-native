/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component<{}> {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyD1jmz2hXghDxDoeXpdrEIOzY3vMvxhDi0",
            authDomain: "manager-b0616.firebaseapp.com",
            databaseURL: "https://manager-b0616.firebaseio.com",
            projectId: "manager-b0616",
            storageBucket: "manager-b0616.appspot.com",
            messagingSenderId: "244736709593"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}
