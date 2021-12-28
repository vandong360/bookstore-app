import  React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { KhoahocStackNavigator, 
  VanhocStackNavigator, 
  MainStackNavigator, 
  TamlyStackNavigator, 
  KinhteStackNavigator, 
  GiaokhoaStackNavigator } from '../StackNavigatior';
import 'react-native-gesture-handler';
import BottomNavigator from './BottomNavigator';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

const MenuDrawer = ({navigation, route}) => {


  return (
      <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="HOME" component={MainStackNavigator} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
           
        }} />
        <Drawer.Screen name="Văn học" component={VanhocStackNavigator} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ) 
        }} />
        <Drawer.Screen name="Khoa học" component={KhoahocStackNavigator} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          )
           
        }} />
        <Drawer.Screen name="Kinh tế" component={KinhteStackNavigator} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ) 
        }} />
        <Drawer.Screen name="Tâm lý" component={TamlyStackNavigator} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ) 
        }} />
        <Drawer.Screen name="Giáo khoa" component={GiaokhoaStackNavigator} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ) 
        }} />
        
      </Drawer.Navigator> 
  );
}
export default MenuDrawer;