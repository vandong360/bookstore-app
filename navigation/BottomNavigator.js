import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import { Image } from "react-native";
import images from "../constants/images";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import { LoginStackNavigator, MainStackNavigator } from "../StackNavigator";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const screenOption = {
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ebb859",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 60,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }
      }

const BottomNavigator = ({navigation,route}) => {
  return (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="Trang Chủ"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.icHome3x}
                style={{
                  tintColor: focused ? "white" : "gray",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Giỏ hàng"
        component={Cart}
        options={{
          headerStyle: { backgroundColor: "#ebb859" },
          headerTintColor: "#fff",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.icCart3x}
                style={{
                  tintColor: focused ? "white" : "gray",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Thông tin"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: "#ebb859" },
          headerTintColor: "#fff",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.icProfile3x}
                style={{
                  tintColor: focused ? "white" : "gray",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={Setting}
        options={{
          headerStyle: { backgroundColor: "#ebb859" },
          headerTintColor: "#fff",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.icSetting3x}
                style={{
                  tintColor: focused ? "white" : "gray",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
