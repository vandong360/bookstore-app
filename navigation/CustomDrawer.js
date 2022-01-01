import React from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import images from "../constants/images";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../store/slices/authSlice";

const imgStyle = {
            width: 60,
            height: 60,
            borderRadius: 30,
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
          }

const CustomDrawer = (props) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#ebb859" }}>
        <Image source={images.avtDrawer} style={imgStyle} />
        <Text style={{ color: "white", fontSize: 16, marginLeft: 15 }}>Xin chào {user ? user.name : 'Khách' }!</Text>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity onPress={handleLogout}>
          <View style={{flexDirection:'row', marginLeft:10, marginBottom:20 }}>
          <Image source={images.logout}
          style={{width:17, height:17, marginHorizontal:5, marginTop:4,  tintColor:"#226AD6"}}></Image>
          <Text style={{fontSize:17, color:"#226AD6"}}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
    </View>
    
  );
};

export default CustomDrawer;
