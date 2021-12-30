import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import 'react-native-gesture-handler';

import MenuDrawer from './navigation/MenuDrawer';
import { LoginStackNavigator } from './StackNavigatior';
import Checkout from './screens/Checkout';

import { Provider } from "react-redux";
import store from "./store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoginStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
