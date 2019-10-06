import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/navigation/navigator';
import HomeScreen from './src/screens/HomeScreen';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <AppNavigator/>
    );
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
