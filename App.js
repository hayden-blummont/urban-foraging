import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Settings from './screens/Settings'
import Home from './screens/Home'
import Profile from './screens/Profile'

import {
  createStackNavigator,
} from 'react-navigation';

const AppNavigator = createStackNavigator({
  SettingsScreen: { screen: Settings },
  HomeScreen: { screen: Home },
  ProfileScreen: { screen: Profile },
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  }
};
