import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Button } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import images from "../constants/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateCart } from "../store/slices/cartSlice";

const Cart = () => {
  const { itemCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function renderListProduct(itemCart) {
    const renderItem = ({ item }) => {
      return (
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            marginHorizontal: 10,
            borderColor: "#dbdbdb",
            borderWidth: 2,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={{ uri: item.productImg }}
            resizeMode="cover"
            style={{
              width: 70,
              height: 100,
              borderRadius: 10,
            }}
          ></Image>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.productName}</Text>
            <Text style={{ marginVertical: 10 }}>
              <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
              {item.productDiscount}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.qty}>
                <Text>-</Text>
              </View>
              <Text style={{ marginRight: 10, fontWeight: "bold" }}>{item.quantity}</Text>
              <View style={styles.qty}>
                <Text>+</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flex:1}}>
                <Text style={{ textAlign: "right", fontWeight: "bold" }}>X
                </Text>
            </View>
            <View style={{flex:1, justifyContent:"flex-end"}}>
                <Text style={{ fontWeight: "bold", color:"#ED2629"}}>
                {item.productPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}  đ
                </Text></View>
          </View>
        </View>
      );
    };
 
    return (
      <View>
        <FlatList
          data={itemCart}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={true}
        ></FlatList>

        <View style={{marginTop:20, }}>
          <View style={{ flexDirection: "row", marginHorizontal: 15, marginBottom: 10 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Tổng</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color:"#ED2629" }}>1.000.000 đ</Text>
          </View>
          <View style={{ flexDirection: "row", marginHorizontal: 15, marginBottom: 10 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Giảm giá</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color:"#ED2629" }}>0 đ</Text>
          </View>
          <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Tổng</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color:"#ED2629" }}>1.000.000 đ</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderListProduct(itemCart)}
      <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row", marginBottom: 50 }}>
        <TouchableOpacity
          style={{
            width: 390,
            height: 50,
            backgroundColor: "#ebb859",
            borderRadius: 20,
            marginHorizontal: 10,
            marginVertical: 20,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold", color: "#fff", fontSize: 16, marginVertical: 12 }}>
            Mua Hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  qty: {
    alignItems: "center",
    width: 25,
    height: 20,
    backgroundColor: "#ebb859",
    marginRight: 10,
    borderRadius: 5,
  },
  code: {
    flexDirection: "row",
    width: 390,
    height: 50,
    borderColor: "#dbdbdb",
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 25,
    borderRadius: 10,
  },
});

export default Cart;
