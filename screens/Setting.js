import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../store/slices/orderSlice";

const Setting = () => {
  const { user } = useSelector((state) => state.auth);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getOrder() {
      await dispatch(getUserOrders(user._id));
    }
    getOrder();
  }, []);

  const [data, setData] = React.useState([
    {
      id: 1,
      date: "06/01/2022",
      product: "1 Thủy hử, 2 Đắc nhân tâm",
      price: "300000",
      status: "Đang vận chuyển",
    },
    {
      id: 2,
      date: "02/01/2022",
      product: "1 Tây du ký, 2 Kim bình mai",
      price: "300000",
      status: "Đã nhận hàng",
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          borderColor: "#dbdbdb",
          borderWidth: 2,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Ngày đặt hàng: {item.date}</Text>
          <Text style={{ marginVertical: 10, fontWeight: "bold" }}>Sản phẩm: {item.product}</Text>
          <Text style={{ fontWeight: "bold" }}>Tổng giá: {item.totalPrice} đ</Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>Trạng thái: {item.status}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {order === null ? (
        <Text>Waiting</Text>
      ) : (
        <FlatList
          data={order}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Setting;
