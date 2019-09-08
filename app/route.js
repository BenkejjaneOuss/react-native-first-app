import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from './home'
import Login from './login'
import Register from './register'
import Splash from './splash'

const AppNavigator = createStackNavigator({
  Register: Register,
  Splash: {
    screen: Splash,
  },
  Home: {
    screen: Home,
    
  },
  Login: Login,
})

/*
const AppNavigator = createBottomTabNavigator({

    Home: {
        screen: Home,

        
    },
    Login: {
        screen : Login,
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
        }),
    },
    Register: {
        screen : Register,
    }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Login') {
          iconName = `ios-person`;
        } else if (routeName === 'Register') {
          iconName = `ios-add`;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    order: ['Home', 'Login','Register'],
    tabBarOptions: {
      showIcon: true,
    showLabel: true,
        
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)
*/
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;