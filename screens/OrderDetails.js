import React from "react";
import { RefreshControl, View, Text, FlatList, StyleSheet, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getUserOrders } from "../store/slices/orderSlice";
import { cancelOrder } from "../store/slices/orderSlice";
import images from "../constants/images";
import moment from "moment";

const OrderDetails = ({ route, navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { order } = route.params;
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getOrder() {
      await dispatch(getUserOrders(user._id));
    }
    getOrder();
  }, []);

  const handleCancel = async () => {
    await dispatch(cancelOrder(order._id));
    Alert.alert("Huỷ đơn thành công!");
  }

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
            <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold", right: 10 }}>Chi tiết đơn hàng</Text>
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
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Ionicons name="location" size={15} color="#ebb859"></Ionicons>
          <Text style={{ marginHorizontal: 10, fontWeight: "bold" }}>Thông tin đặt hàng</Text>
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <Text>
            {order.userName} | {order.phone}
          </Text>
          <Text>{order.address}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Số lượng sách </Text>
            <Text style={{ fontWeight: "bold", textAlign: "right" }}>{order.amount}</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Tổng tiền</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color: "#ED2629" }}>
              {order.totalPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 10 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Phí vận chuyển</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color: "#ED2629" }}>0 đ</Text>
          </View>
          <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 10 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Tổng tiền thanh toán</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color: "#ED2629" }}>
              {order.totalPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Text style={{ textAlign: "center" }}>Thanh toán khi nhận hàng</Text>
        </View>
        {order.status === "waiting" ? (
          <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "#FFF" }}>Hủy Đơn Hàng</Text>
          </TouchableOpacity>
        ) : order.status === "shipping" ? (
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "green" }}>Đơn hàng đang được giao</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "black" }}>
              Bắt đầu giao ngày {moment(order.updatedAt).format("LL")}
            </Text>
          </View>
        ) : order.status === "delivered" ? (
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "blue" }}>Đơn hàng đã giao thành công!</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "black" }}>
              Nhận hàng lúc {moment(order.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "red" }}>Đơn hàng đã bị huỷ</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "black" }}>
              Đã huỷ lúc {moment(order.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </Text>
          </View>
        )}
      </View>
    );
  }

  return <View style={styles.container}>{renderListProduct(order.products)}</View>;
};

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  container: {
    marginTop: 20,
  },
  buttonCancel: {
    width: 130,
    height: 40,
    backgroundColor: "#42AB41",
    left: "33%",
    paddingVertical: 6,
    borderRadius: 5,
  },
});

export default OrderDetails;
