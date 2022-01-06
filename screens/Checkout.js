import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Button, Alert } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import images from "../constants/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getUserOrders } from "../store/slices/orderSlice";
import { getCart, updateCart } from "../store/slices/cartSlice";

const Checkout = ({ route, navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { newOrder } = route.params;
  const dispatch = useDispatch();

  const handleOrder = async () => {
    const response = await dispatch(createOrder(newOrder));
    if (response.payload.success) {
      Alert.alert("Đặt hàng thành công!");

      const cartId = cart._id
      const products = []
      const values = { cartId, products };
      await dispatch(updateCart(values));
      await dispatch(getCart(user._id));
      await dispatch(getUserOrders(user._id));
    } else Alert.alert("Không thành công");
  };

  function renderListProduct(products) {
    const renderItem = ({ item }) => {
      return (
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            marginHorizontal: 10,
            borderColor: "#dbdbdb",
            borderWidth: 1,
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
            <Text style={{ fontSize: 16, fontWeight: "bold", flex: 1 }}>{item.productName}</Text>
            <Text style={{ marginVertical: 10, fontWeight: "bold", flex: 1 }}>Số lượng: {item.quantity}</Text>
            <Text style={{ fontWeight: "bold", color: "#ED2629" }}>
              {item.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
            </Text>
          </View>
        </View>
      );
    };

    return (
      <View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1, justifyContent: "center", left: 10 }}>
            <Image source={images.back} style={{ width: 20, height: 20 }}></Image>
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold", right: 10 }}>Đặt Hàng</Text>
          </View>
        </View>
        <View style={{ height: "62%" }}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.productId.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>

        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Số lượng sách </Text>
            <Text style={{ fontWeight: "bold", textAlign: "right" }}>{products.length}</Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Tổng tiền đơn hàng</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color: "#ED2629" }}>
              {newOrder.totalPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10 }}>
          <Ionicons name="location" size={15} color="#ebb859"></Ionicons>
          <Text style={{ marginHorizontal: 10, fontWeight: "bold" }}>Thông tin đặt hàng</Text>
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <Text>
            {newOrder.userName} | {newOrder.phone}
          </Text>
          <Text>{newOrder.address}</Text>
        </View>

        <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ color: "#ebb859", fontWeight: "bold", fontSize: 16 }}>$</Text>
          <Text style={{ marginHorizontal: 10, fontWeight: "bold" }}>Phương thức thanh toán</Text>
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <Text>Thanh toán khi nhận hàng</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderListProduct(newOrder.products)}
      <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 390,
            height: 50,
            backgroundColor: "#ebb859",
            borderRadius: 10,
            marginHorizontal: 10,
            marginVertical: 20,
          }}
          onPress={handleOrder}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold", color: "#fff", fontSize: 16, marginVertical: 12 }}>
            Xác Nhận Đơn Hàng
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

export default Checkout;
