import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import { Image } from "react-native";
import images from "../constants/images";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import Home from "../screens/Home";

import Toptabs from "./Toptabs.js";
// import CartStackNavigator from "../StackNavigator"
const Tab = createBottomTabNavigator();

const screenOption = {
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#FFF",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 60,
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
                source={images.home}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23, 
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
                source={images.cart}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23
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
                source={images.profile}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Quản Lý Đơn Hàng"
        component={Toptabs}
        options={{
          headerStyle: { backgroundColor: "#ebb859" },
          headerTintColor: "#fff",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.note}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23
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
