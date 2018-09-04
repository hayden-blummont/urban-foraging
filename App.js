import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fuck Yeah</Text>
        <Text>Do it bitches.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="Enter">Enter</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#56D150',
    fontSize: 30,
  },
});
