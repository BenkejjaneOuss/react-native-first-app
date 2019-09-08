/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Route from './app/route'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducers from './app/modules/auth/reducers'

import store from './app/modules/store'

import { setCurrentUser } from "./app/modules/actions";
import setAuthToken from "./app/modules/utils/setAuthToken";
import jwt_decode from "jwt-decode";

import AsyncStorage from '@react-native-community/async-storage';
AsyncStorage.getItem('mern_todo_app_token')
			.then(token => {
				if(token){
          setAuthToken(token);
          const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
        				}
			})


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route  />
      </Provider>
    );
  }
}


