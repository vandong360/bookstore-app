import React, { useEffect } from "react";
import { RefreshControl, View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAllProduct } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const Result = ({ route, navigation }) => {
  const { products } = useSelector((state) => state.products);
  const { key } = route.params;

  const text = key.toLowerCase();

  let result = [];

  for (let item of products) {
    if (item.name.toLowerCase().indexOf(text) > -1) {
      result.push(item);
      console.log("ket qua: ", result);
    }
  }

  function renderProducts(item) {
    return (
      <View style={styles.cardView}>
        <TouchableOpacity onPress={() => navigation.navigate("Details", { book: item })}>
          <Text style={styles.title}> {item.name}</Text>
          <Text style={styles.author}>{item.author} </Text>
          <Image style={styles.image} source={item.image ? { uri: item.image } : null} />
          <View style={styles.discount}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                marginVertical: 13,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              {item.discount}%
            </Text>
          </View>
          <Text style={styles.price}>{item.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ</Text>
          <Text style={styles.oldPrice}>{item.oldPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", height: 50, backgroundColor: "#ebb859", marginBottom: 20 }}>
        <TouchableOpacity style={{ marginHorizontal: 5, marginVertical: 10 }} onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={25} color="#fff"></Ionicons>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 90, marginTop: 10, fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Kết quả tìm kiếm
        </Text>
      </View>
      <FlatList
        data={result}
        numColumns={2}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item, index }) => renderProducts(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  cardView: {
    width: "48%",
    marginHorizontal: 4,
    backgroundColor: "white",
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.03,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    marginVertical: width * 0.02,
    marginHorizontal: width * 0.02,
    color: "#ebb859",
    fontSize: 16,
  },
  oldPrice: {
    marginVertical: width * 0.02,
    marginHorizontal: width * 0.02,
    color: "gray",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  image: {
    height: 150,
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.03,
    fontSize: 12,
    color: "gray",
  },
  discount: {
    width: 50,
    height: 50,
    backgroundColor: "#ebb859",
    borderRadius: 35,
    justifyContent: "flex-start",
    position: "absolute",

    marginTop: 70,
  },
});

export default Result;
