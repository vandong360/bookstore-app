import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import { Image } from 'react-native';
import images from '../constants/images';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
      
        <Tab.Navigator 
        screenOptions={{
          
          tabBarShowLabel: false,
          tabBarStyle:{
            position: 'absolute',
            backgroundColor: '#ebb859',
            borderRadius: 20,
            bottom: 10,
            marginHorizontal: 16
          }
        }}
        >
          <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                <Image source={images.icHome3x} style={{
                  tintColor: focused ? 'white': 'gray'
                }}/>
              )
            }
          }}
          />
          <Tab.Screen name="Giỏ hàng" component={Cart}
          options={{
            headerStyle:{backgroundColor:'#ebb859'},
          headerTintColor: '#fff',
            tabBarIcon: ({focused})=>{
              return(
                <Image source={images.icCart3x} style={{
                  tintColor: focused ? 'white': 'gray'
                }}/>
              )
            }
          }}
          />
          <Tab.Screen name="Thông tin" component={Profile}
          options={{
            headerStyle:{backgroundColor:'#ebb859'},
          headerTintColor: '#fff',
            tabBarIcon: ({focused})=>{
              return(
                <Image source={images.icProfile3x} style={{
                  tintColor: focused ? 'white': 'gray'
                }}/>
              )
            }
          }}
          />
          <Tab.Screen name="Cài đặt" component={Setting}
          options={{
            headerStyle:{backgroundColor:'#ebb859'},
          headerTintColor: '#fff',
            tabBarIcon: ({focused})=>{
              return(
                <Image source={images.icSetting3x} style={{
                  tintColor: focused ? 'white': 'gray'
                }}/>
              )
            }
          }}
          />
        </Tab.Navigator>
    );
  }
export default BottomNavigator;