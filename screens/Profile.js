import React from 'react';
import { View, Text, Button } from 'react-native';

class Profile extends React.Component {

  static navigationOptions = {
    title: 'Janes Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go home"
        onPress={() =>
          navigate('HomeScreen')
        }
      />
    );
  }
}

export default Profile
