import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet } from 'react-native'
import { Content, Form, Item, Input, Label, Container, Button, Text, Spinner, Toast, Left } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(42, 55, 68)',
  },
  loadingText: {
    color: '#fff',
    fontSize: 15,
    paddingTop: 5
  },
});

class Splash extends Component {
    static navigationOptions = {
        header: null
    }
  componentDidMount() {
    AsyncStorage.getItem('auth_token')
      .then(token => {
          if (token) {
            this._navigate('Home');
          }else {
            this._navigate('Login');
          }
      });
  }

    //Added this dummy method to cause a delay just to see the splash
  _navigate(screen) {
    setTimeout(() => {
      this.props.navigation.navigate(screen);
    }, 3000 );

  }

  render(){
    return (
      <Container style={styles.container}>
        <Spinner color="white" />
        <Text style={styles.loadingText}>Loading ...</Text>
      </Container>
    );
  }
}

export default Splash;