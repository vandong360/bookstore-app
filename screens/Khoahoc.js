import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Khoahoc = ({navigation}) =>{
    return (
    <View>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}><Ionicons 
      name="menu-outline" size={25} color="black"></Ionicons>
      </TouchableOpacity>
        <Text>Prodcut</Text>
    </View>
    )
}

export default Khoahoc