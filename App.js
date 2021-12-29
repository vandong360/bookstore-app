import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import 'react-native-gesture-handler';

import MenuDrawer from './navigation/MenuDrawer';
import { LoginStackNavigator } from './StackNavigatior';
import Checkout from './screens/Checkout';





export default function App() {
  return (
  <NavigationContainer >
    {/* <MenuDrawer/> */}
    <LoginStackNavigator/>
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
