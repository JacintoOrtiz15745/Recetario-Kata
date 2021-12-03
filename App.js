/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/Navigation';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Calling `getNode()`']);

LogBox.ignoreLogs(['Each child in a list should have a uni']);

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
