import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import images from '../constants/images';
const Profile = () =>{
    const [edit, setEdit] = useState(true);
    const handleEdit = () => setEdit(!edit);
    const [text, onChangeText] = React.useState("thông tin")
    return (
    
    <View style={styles.container}>
       <ImageBackground source={images.bgProfile} style={styles.image}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ justifyContent: "center" }}>
        <View style={styles.content}>
            <View style={{alignItems:"center", borderBottomWidth:1, borderBottomColor:"#dbdbdb", paddingBottom:30}}>
                <Image source={images.avtDrawer}
                style={{width:130, height:130, borderRadius:65, marginTop:50}}></Image>
            </View>

            <View style={{marginTop:30, }}>
                <View style={{flexDirection:"row", marginLeft:20 }}>
                    <Image source={images.profile} style={{width:15, height:15, tintColor:"orange", marginRight:5}}></Image>
                    <Text style={{fontSize:12}}>NAME</Text>
                </View>
                <View>
                <TextInput
                    editable={edit}
                    style={{ height: 40,
                        marginTop:12,
                        marginHorizontal:20,
                        borderWidth: 1,
                        borderRadius:7,
                        borderColor:"#dbdbdb",
                        fontWeight:"bold",
                        padding: 10,}}
                    value={text}
                    />
                </View>
            </View>

            <View style={{marginTop:30,}}>
                <View style={{ marginLeft:20, flexDirection:"row"}}>
                    <Image source={images.phone} style={{width:15, height:15, tintColor:"orange", marginRight:5}}></Image>
                    <Text style={{fontSize:12, }}>PHONE NUMBER</Text>
                </View>
                <View>
                <TextInput
                    editable={edit}
                    style={{ height: 40,
                        marginTop:12,
                        marginHorizontal:20,
                        borderWidth: 1,
                        borderRadius:7,
                        borderColor:"#dbdbdb",
                        fontWeight:"bold",
                        padding: 10,}}
                    value={text}
                    />
                </View>
            </View>


            <View style={{marginTop:30, }}>
                <View style={{flexDirection:"row", marginLeft:20 }}>
                    <Image source={images.address} style={{width:15, height:15, tintColor:"orange", marginRight:5}}></Image>
                    <Text style={{fontSize:12}}>ADDRESS</Text>
                </View>
                <View>
                <TextInput
                    editable={edit}
                    style={{ height: 40,
                        marginTop:12,
                        marginHorizontal:20,
                        borderWidth: 1,
                        borderRadius:7,
                        borderColor:"#dbdbdb",
                        fontWeight:"bold",
                        padding: 10,}}
                    value={text}
                    />
                </View>
            </View>
            
            <TouchableOpacity onPress={() => handleEdit() } style={{
          width:70,
          height:40,
          backgroundColor:"#42AB41",
          left:"40%",
          paddingVertical:6, 
          borderRadius:5,
          marginTop:20
        }}>
                <Text  style={{textAlign:"center", fontWeight:"bold", color:"#FFF"}}>Edit</Text>
            </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>
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
        height:610,
        backgroundColor:"#FFF",
        marginHorizontal:"12%",
        marginBottom:"20%",
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