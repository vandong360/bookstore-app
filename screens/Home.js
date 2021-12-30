import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import images from "../constants/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { getNewProd, getHotProd } from "../store/slices/productSlice";

import Rating from "../Components/rating";

const Home = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { newProducts, hotProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getNewProd());
    dispatch(getHotProd());
  }, []);

  //component new book
  function renderNewProducts(newProducts) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{ height: 350, width: 180, justifyContent: "center", 
          marginHorizontal: 10, borderWidth:1, borderColor:"#dbdbdb", borderRadius:10 }}
          onPress={() => navigation.navigate('Details',{book: item})}
        >
          <Text 
          style={{ color: "gray", fontWeight: "bold", fontSize: 12, lineHeight: 22, left:5 }}>{item.category}
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginTop: 14,
              // paddingLeft: 10,
              paddingBottom: 10,
            }}
          >
            <View style={{ height: "25%", paddingLeft: 10, paddingTop: 8 }}>
              <Text style={{ 
                flex:1, color: "gray", fontSize: 14, lineHeight: 18, fontWeight: "bold", 
                }}>{item.name}</Text>
              <View style={{backgroundColor:"#ebb859", width:"50%", alignItems:"center", borderRadius:8}}>
                <Text 
                style={{ color: "white", fontSize: 14, lineHeight: 20, fontWeight: "bold", }}>
                  {item.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ
                </Text>
                </View>
            </View>
          </View>

          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              position: "absolute",
              top: 30,
              right: 3,
              width: "95%",
              height: 240,
              borderRadius: 10,
            }}
          ></Image>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <Text style={{ marginTop: 30, marginHorizontal: 10, fontWeight: "bold", fontSize: 16, color: "#ebb859" }}>
          MỚI
        </Text>
        <View style={{ height: 350, marginTop: 12 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={newProducts}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderItem}
          ></FlatList>
        </View>
      </View>
    );
  }

  //component hot book
  function renderHotProducts(hotProducts) {
    const renderItem = ({ item, index }) => {
      return (
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity 
          style={{flexDirection: "row", marginLeft:10, }} 
          onPress={() => navigation.navigate('Details',{book: item})}>
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={{
                width: 100,
                height: 150,
                borderRadius: 10,
              }}
            ></Image>

            <View style={{ flex: 1, marginLeft: 10, marginVertical:10 }}>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.name}</Text>
                <Text style={{ fontWeight: "bold", color: "gray", marginTop: 10 }}>{item.author}</Text>
                <Rating
                rating={item.rating}
                > </Rating>
                <View 
                style={{backgroundColor:"#ebb859", width:90, alignItems:"center", borderRadius:8, marginTop:15}}>
                  <Text style={{ fontWeight: "bold", color: "white", marginVertical:2 }}>
                    {item.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ
                  </Text>
                  </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <Text style={{ marginHorizontal: 10, fontWeight: "bold", fontSize: 16, color: "#ebb859", marginTop:20 }}>
          ĐÁNH GIÁ CAO NHẤT
        </Text>
        <View style={{ marginTop: 5, marginBottom:70 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={hotProducts}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderItem}
          ></FlatList>
        </View>
      </View>
    );
  }

  //return main component
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: -26 }}>
        <TouchableOpacity style={{ marginTop: 40, paddingLeft: 10 }} onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={25} color="black"></Ionicons>
        </TouchableOpacity>
        <Image
          source={images.logo}
          style={{
            width: 200,
            height: 70,
            marginTop: 20,
            marginLeft: 74,
          }}
        />
      </View>

      <View style={styles.search}>
        <View style={{ marginTop: 7, marginLeft: 3 }}>
          <Ionicons name="search" size={20} color="#ebb859"></Ionicons>
        </View>
        <TextInput placeholder="Search" style={{ marginLeft: 10, marginVertical: 10 }}></TextInput>
      </View>
          <FlatList 
          ListHeaderComponent={renderNewProducts(newProducts)}
          ListFooterComponent={renderHotProducts(hotProducts)}>
          </FlatList>
      {/* <View>{renderNewProducts(newProducts)}</View>

      <View style={{ marginLeft: 12 }}>{renderHotProducts(hotProducts)}</View> */}
    </View>
  );
};

//styles for main component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  search: {
    flexDirection: "row",
    width: "95%",
    height: 40,
    borderColor: "#dbdbdb",
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  trendingshadow: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default Home;
