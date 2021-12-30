import React from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import images from "../constants/images";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#ebb859" }}>
        <Image
          source={images.avtDrawer}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        />
        <Text style={{ color: "white", fontSize: 18, marginLeft: 15 }}>Canh</Text>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
