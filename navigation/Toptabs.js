import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Danggiao from '../screens/Danggiao';
import Setting from '../screens/Setting';
import Dagiao from '../screens/Dagiao';
import DaHuy from '../screens/Dahuy';
const Tab = createMaterialTopTabNavigator();

function Toptabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Chờ xác nhận" component={Setting} />
        <Tab.Screen name="Đang giao" component={Danggiao} />
        <Tab.Screen name="Đã giao" component={Dagiao} />
        <Tab.Screen name="Đã hủy" component={DaHuy} />
    </Tab.Navigator>
  );
}

export default Toptabs