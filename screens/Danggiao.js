import React from "react";
import { RefreshControl, View, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../store/slices/orderSlice";
import moment from "moment";

const Danggiao = () => {
  const { user } = useSelector((state) => state.auth);
  const { allOrder } = useSelector((state) => state.order);
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getOrder() {
      await dispatch(getUserOrders(user._id));
    }
    getOrder();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(getUserOrders(user._id));
    setRefreshing(false);
  };

  //tab shipping order
  const renderItem = ({ item }) => {
    if (item.status === "shipping") {
      return (
        <View style={styles.itemStyle}>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Ngày đặt hàng: {moment(item.createdAt).format("LL")}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Started {moment(item.updatedAt).startOf("day").fromNow()}...
            </Text>
            <Text style={{ marginVertical: 10, fontWeight: "bold" }}>Số sản phẩm: {item.amount}</Text>
            <Text style={{ fontWeight: "bold" }}>Tổng giá: {item.totalPrice} đ</Text>
            <Text style={{ fontWeight: "bold", marginTop: 10 }}>Trạng thái: Đang giao hàng</Text>
          </View>
        </View>
      );
    } else return <></>;
  };

  return (
    <View>
      {allOrder === null || refreshing === true ? (
        <Text>Waiting</Text>
      ) : (
        <FlatList
          data={allOrder}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: "#dbdbdb",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default Danggiao;
