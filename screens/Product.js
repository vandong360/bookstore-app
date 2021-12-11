import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import images from '../constants/images';

const Product = () => {
   
 return (
    <ScrollView >
        <View style={{alignItems:'center', width:'100%', height:430, backgroundColor:'#f7f7f7'}}>
            <Text style={{marginTop:40, marginHorizontal: 10, fontWeight: 'bold', fontSize: 16, color:'black', textAlign:'center' }}>Details Book</Text>
            <Image source={images.trendingbook1} style = {styles.Image}/>
        </View>
        
        <Text style={{marginTop:10, marginHorizontal: 10, fontWeight: 'bold', fontSize: 18, color:'#ebb859' }}>$20</Text>
        <Text style={{marginTop:10, marginHorizontal: 10, fontWeight: 'bold', fontSize: 18, color:'#3e4242' }}>ATLAS OF THE HEART</Text>
        <Text style={{marginTop:10, marginHorizontal: 10, fontWeight: 'bold', fontSize: 14, color:'gray' }}>Brene Brown</Text>
        
        <View style={{
            flexDirection:"row",
            height:90,
            marginTop:50,
            backgroundColor:'#f7f7f7',
            paddingTop:20,
            marginHorizontal:16,
            borderRadius: 20
            }}>
            <View style={{flexDirection:"column",flex:1}}>
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 14, color:'#ebb859'}}>Rating</Text>
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 14, color:'#3e4242'}}>4</Text>
            </View>
            <View style={{flexDirection:"column", flex:1}}>
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 14, color:'#ebb859'}}>Number of pages</Text>
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 14, color:'#3e4242'}}>1892</Text>
            </View>
            <View style={{flexDirection:"column", flex:1}}>
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 14, color:'#ebb859'}}>Language</Text>
                <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 14, color:'#3e4242'}}>Eng</Text>
            </View>
        </View>
        
        <Text style={{marginTop:20, marginHorizontal: 10, fontSize: 14, color:'gray' }}>Mapping Meaningful Connection and the Language of Human Experience</Text>
                
        <View style={{flexDirection:'row',height:90,marginTop:50, paddingTop:20,marginHorizontal:16}}>
            <View style={{
            flexDirection:'row',
            width:200,
            backgroundColor:'#f7f7f7',
            paddingTop:20,
            marginHorizontal:10,
            borderRadius: 20,
            }} >
                <View style={{width:70}}><Text style={{textAlign:'center', fontWeight:'bold'}}>QTY</Text></View>
                <View style={{flexDirection:'row', paddingLeft:40}}>
                    <Text style={{marginRight:20}}>-</Text>
                    <Text style={{marginRight:20}}>1</Text>
                    <Text style={{marginRight:20}}>+</Text>
                </View>
            </View>
            <View >
                <TouchableOpacity style={{
                width:140,
                height:70,
                backgroundColor:'#ebb859',
                paddingTop:20,
                marginHorizontal:10,
                borderRadius: 20,}}><Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold'}}>Add to Cart</Text></TouchableOpacity>
            </View>
        </View>
    </ScrollView>
 );
}


const styles = StyleSheet.create({
    Image: {
        width: 220,
        height: 300,
        marginTop:20,
        borderRadius:20
    }
});

export default Product;