import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import images from '../constants/images';
const Profile = () =>{
    return (
    <View style={styles.container}>
       <ImageBackground source={images.bgProfile} style={styles.image}>
        <View style={styles.content}>

            <View style={{alignItems:"center", borderBottomWidth:1, borderBottomColor:"#dbdbdb", paddingBottom:30}}>
                <Image source={images.avtDrawer}
                style={{width:130, height:130, borderRadius:65, marginTop:50}}></Image>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:20, fontWeight:"bold", marginTop:20,}}>Duc Canh</Text>
                <TouchableOpacity>
                    <Image source={images.edit} style={{width:20, height:20, tintColor:"orange", marginLeft:10, marginTop:25}}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginTop:80,}}>
                <View style={{flexDirection:"row", marginLeft:20}}>
                    <Image source={images.phone} style={{width:15, height:15, tintColor:"orange", marginRight:5}}></Image>
                    <Text style={{fontSize:12, }}>PHONE NUMBER</Text>
                </View>
                <View style={{flexDirection:"row", marginLeft:40, marginTop:10 }}>
                    <Text style={{fontWeight:"bold", fontSize:18, }}>419-691-7500</Text>
                    <TouchableOpacity>
                    <Image source={images.edit} style={{width:20, height:20, tintColor:"orange", marginLeft:10}}></Image>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{marginTop:40, }}>
                <View style={{flexDirection:"row", marginLeft:20 }}>
                    <Image source={images.address} style={{width:15, height:15, tintColor:"orange", marginRight:5}}></Image>
                    <Text style={{fontSize:12}}>ADDRESS</Text>
                </View>
                <View style={{flexDirection:"row", marginLeft:40, marginTop:10 }}>
                    <Text style={{fontWeight:"bold", fontSize:16,}}>Ngu Hanh Son, Da Nang</Text>
                    <TouchableOpacity>
                    <Image source={images.edit} style={{width:20, height:20, tintColor:"orange", marginLeft:10}}></Image>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
       </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    content:{
        width:"77%",
        height:"80%",
        backgroundColor:"#FFF",
        marginHorizontal:"12%",
        marginBottom:"10%",
        borderRadius:30,
        opacity:0.9,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

elevation: 2,
    }
  });

export default Profile