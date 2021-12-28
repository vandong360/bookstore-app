import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";
import Khoahoc from "./screens/Khoahoc";
import Vanhoc from "./screens/Vanhoc";
import Product from "./screens/Product";
import Details from "./screens/Details";
import Login from "./screens/Login";
// import MenuDrawer from "./navigation/MenuDrawer"; 
import BottomNavigator from "./navigation/BottomNavigator";
import Signup from "./screens/Signup";
import Kinhte from "./screens/Kinhte";
import Tamly from "./screens/Tamly";
import Giaokhoa from "./screens/Giaokhoa";


const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} >
        <Stack.Screen name="HomeScreens" component={BottomNavigator}/>
        <Stack.Screen name="Product" component={Product}/>
      </Stack.Navigator>
    );
  }
  const CartStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    );
  }
  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
  const SettingStackNavigator = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    );
  }
  const KhoahocStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Khoahoc" component={Khoahoc} />
      </Stack.Navigator>
    );
  }
  const KinhteStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Kinhte" component={Kinhte} />
      </Stack.Navigator>
    );
  }
  const TamlyStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tamly" component={Tamly} />
      </Stack.Navigator>
    );
  }
  const GiaokhoaStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Giaokhoa" component={Giaokhoa} />
      </Stack.Navigator>
    );
  }

  const VanhocStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} >
        <Stack.Screen name="Vanhoc" component={Vanhoc} />
        <Stack.Screen name="Details" component={Details} options={{
          headerStyle:{backgroundColor:'#ebb859'},
          headerTintColor: '#fff'
      }} />
      </Stack.Navigator>
    );
  }

  const LoginStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="MenuDrawer" component={MenuDrawer}/> */}
      </Stack.Navigator>
  
    );
  }

  
 

  export {MainStackNavigator, 
    CartStackNavigator, 
    ProfileStackNavigator, 
    SettingStackNavigator,
    KhoahocStackNavigator, 
    VanhocStackNavigator,
    LoginStackNavigator,
    KinhteStackNavigator,
    TamlyStackNavigator,
    GiaokhoaStackNavigator
  };