import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is the home screen</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('ProfileScreen', { name: 'Jane' })
          }
        />
      </View>
    )
  }
}

export default Home
