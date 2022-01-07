import React from "react";
import { RefreshControl, View, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../store/slices/orderSlice";
import moment from "moment";

const Dagiao = ({route, navigation}) => {
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

  //tab delived order
  const renderItem = ({ item }) => {
    if (item.status === "delivered") {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("OrderDetails", {order: item })}>
          <View style={styles.itemStyle}>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color:"#161717", textAlign:"center" }}>
              Ngày đặt hàng: {moment(item.createdAt).format("LL")}
            </Text>
            <Text style={{ marginVertical: 10, fontWeight: "bold", color:"#2E3030"  }}>Số sản phẩm: {item.amount}</Text>
            <View style={{flexDirection:"row"}}>
            <Text style={{ fontWeight: "bold", color:"#2E3030"  }}>Tổng giá: </Text>
            <Text style={{fontWeight: "bold", color:"#C91A1D"}}>{item.totalPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={{ fontWeight: "bold", marginTop: 10, color:"#2E3030"  }}>Trạng thái: </Text>
            <Text style={{ fontWeight: "bold", marginTop: 10, color:"#0F9400"  }}>Đã giao</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
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
    marginHorizontal: 14,
    backgroundColor:"#FFF",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default Dagiao;
