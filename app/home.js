import React, { Component } from 'react'
import { Platform, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {   Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text} from 'native-base'

import AsyncStorage from '@react-native-community/async-storage';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

export default class Home extends Component{
  static navigationOptions = {
		header: null
	}
    constructor (){
        super()
        this.state= {
            title: 'Title with state'
        }
    }

    _onLogoutPress() {
      AsyncStorage.removeItem('auth_token')
      this.props.navigation.navigate('Login') 
    }

    render(){
        return (
        <Container style={styles.container}>
          <Header style={styles.header}>
            <Left/>
            <Body >
              <Title style={styles.headerTitle}>Header</Title>
            </Body>
            <Right>
              <Button transparent onPress={this._onLogoutPress.bind(this)}>
                <Ionicons name='ios-power' size={25} color='tomato' />
              </Button>
            </Right>
          </Header>
          <Content padder  contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </Content>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#FFF',
      borderBottomWidth: 0.5,
      borderBottomColor: 'gray'
    },
    headerTitle: {
      color: 'gray',
      alignSelf: 'flex-end'
    },
    container: {
      //backgroundColor: '#F5FCFF',

    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

