import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Image } from "react-native";
import Danggiao from '../screens/Danggiao';
import Setting from '../screens/Setting';
import Dagiao from '../screens/Dagiao';
import DaHuy from '../screens/Dahuy';
import images from '../constants/images';
const Tab = createMaterialTopTabNavigator();

function Toptabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#ebb859',
      tabBarInactiveTintColor:"#dbdbdb",
      tabBarLabelStyle: { fontSize: 9, fontWeight:"bold" },
    }}>
        <Tab.Screen name="Chờ xác nhận" component={Setting} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.choxacnhan}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23, 
                }}
              />
            );
          },
        }} />
        <Tab.Screen name="Đang giao" component={Danggiao} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.danggiao}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23, 
                }}
              />
            );
          },
        }} />
        <Tab.Screen name="Đã giao" component={Dagiao} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.dagiao}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23, 
                }}
              />
            );
          },
        }}/>
        <Tab.Screen name="Đã hủy" component={DaHuy} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={images.bin}
                style={{
                  tintColor: focused ? "#ebb859" : "#dbdbdb", width:23, height:23, 
                }}
              />
            );
          },
        }}/>
    </Tab.Navigator>
  );
}

export default Toptabs