import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import CheckList from './screens/CheckList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Home: Home,
  CheckList: CheckList,
});

const AppContainer = createAppContainer(AppNavigator);