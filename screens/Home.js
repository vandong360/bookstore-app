import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import images from "../constants/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { getNewProd, getHotProd } from "../store/slices/productSlice";

const Home = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { newProducts, hotProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getNewProd());
    dispatch(getHotProd());
  }, []);

  const [bestseller, setBestseller] = React.useState([
    {
      id: 0,
      name: "Of Literature and Lattes",
      img: images.bestseller1,
      author: "Katherine Reay",
      type: "Văn Học",
      price: "350.000 đ",
    },
    {
      id: 1,
      name: "Because of Winn-Dixie: An Instructional Guide for Literature",
      img: images.bestseller2,
      author: "Tracy Pearce",
      type: "Văn Học",
      price: "300.000 đ",
    },
    {
      id: 3,
      name: "The Dine Reader: An Anthology of Navajo Literature",
      author: "Esther G.Belin ",
      img: images.bestseller3,
      type: "Văn Học",
      price: "350.000 đ",
    },
  ]);

  //component new book
  function renderNewProducts(newProducts) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{ height: 340, width: 180, justifyContent: "center", marginHorizontal: 8, marginLeft: 13 }}
          onPress={() => navigation.navigate("Product")}
        >
          <Text style={{ color: "gray", fontWeight: "bold", fontSize: 12, lineHeight: 22 }}>{item.category}</Text>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginTop: 8,
              borderRadius: 10,
              marginRight: 24,
              // paddingLeft: 10,
              paddingRight: 24,
              paddingBottom: 12,
            }}
          >
            <View style={{ height: "25%", paddingLeft: 10, paddingTop: 14 }}>
              <Text style={{ color: "gray", fontSize: 16, lineHeight: 22, fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ color: "gray", fontSize: 16, lineHeight: 22, fontWeight: "bold" }}>{item.price}</Text>
            </View>
          </View>

          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              position: "absolute",
              top: 30,
              right: 0,
              width: "100%",
              height: 240,
              borderRadius: 10,
            }}
          ></Image>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <Text style={{ marginTop: 20, marginHorizontal: 10, fontWeight: "bold", fontSize: 16, color: "#ebb859" }}>
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
          <TouchableOpacity style={{ flex: 1, flexDirection: "row" }} onPress={() => navigation.navigate("Product")}>
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={{
                width: 100,
                height: 150,
                borderRadius: 10,
              }}
            ></Image>

            <View style={{ flex: 1, marginLeft: 10 }}>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.name}</Text>
                <Text style={{ fontWeight: "bold", color: "gray", marginTop: 5 }}>{item.author}</Text>
                <Text style={{ fontWeight: "bold", color: "gray", marginTop: 5 }}>{item.category}</Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
                  <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
                  <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
                  <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
                </View>
                <Text style={{ fontWeight: "bold", color: "gray", marginTop: 5 }}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <Text style={{ marginHorizontal: 10, fontWeight: "bold", fontSize: 16, color: "#ebb859" }}>
          ĐÁNH GIÁ CAO NHẤT
        </Text>
        <View style={{ height: 350, marginTop: 5 }}>
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

      <View>{renderNewProducts(newProducts)}</View>

      <View style={{ marginLeft: 12 }}>{renderHotProducts(hotProducts)}</View>
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
    width: 385,
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