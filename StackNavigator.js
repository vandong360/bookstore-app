import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";
import Khoahoc from "./screens/Khoahoc";
import Vanhoc from "./screens/Vanhoc";
import Details from "./screens/Details";
import Kinhte from "./screens/Kinhte";
import Tamly from "./screens/Tamly";
import Thieunhi from "./screens/thieunhi";
import Laptrinh from "./screens/laptrinh";
import Giaokhoa from "./screens/Giaokhoa";
import Checkout from "./screens/Checkout";
import BottomNavigator from "./navigation/BottomNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Check out" component={Checkout} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
const SettingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};
const KhoahocStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Khoahoc" component={Khoahoc} />
    </Stack.Navigator>
  );
};
const KinhteStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Kinhte" component={Kinhte} />
    </Stack.Navigator>
  );
};
const TamlyStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tamly" component={Tamly} />
    </Stack.Navigator>
  );
};
const GiaokhoaStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Giaokhoa" component={Giaokhoa} />
    </Stack.Navigator>
  );
};

const LaptrinhStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Laptrinh" component={Laptrinh} />
    </Stack.Navigator>
  );
};

const ThieunhiStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thieunhi" component={Thieunhi} />
    </Stack.Navigator>
  );
};

const VanhocStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Vanhoc" component={Vanhoc} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: { backgroundColor: "#ebb859" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};


export {
  MainStackNavigator,
  CartStackNavigator,
  ProfileStackNavigator,
  SettingStackNavigator,
  KhoahocStackNavigator,
  VanhocStackNavigator,
  KinhteStackNavigator,
  TamlyStackNavigator,
  GiaokhoaStackNavigator,
  LaptrinhStackNavigator,
  ThieunhiStackNavigator,
};
