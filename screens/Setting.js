<<<<<<< HEAD
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
=======
import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../store/slices/orderSlice";
>>>>>>> 57c869a0774350d35d66dd55cf0f0e81683fc254

const Setting = () => {
  const { user } = useSelector((state) => state.auth);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();

<<<<<<< HEAD
    const [data,setData] = React.useState([
        {
            id: 1,
            date:"06/01/2022",
            product: "1 Thủy hử, 2 Đắc nhân tâm",
            price: "300000",
            status: "Chờ xác nhận"
        },
        {
            id: 2,
            date:"02/01/2022",
            product: "1 Tây du ký, 2 Kim bình mai",
            price: "300000",
            status: "Chờ xác nhận"
        }
    ])
=======
  React.useEffect(() => {
    async function getOrder() {
      await dispatch(getUserOrders(user._id));
    }
    getOrder();
  }, []);
>>>>>>> 57c869a0774350d35d66dd55cf0f0e81683fc254

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

<<<<<<< HEAD
        const renderItem = ({item}) =>{
            return(
                <TouchableOpacity>
                <View style={{
                                marginVertical:10, 
                                marginHorizontal:10,
                                borderColor:'#dbdbdb',
                                borderWidth:2,
                                paddingHorizontal:10,
                                paddingVertical:10,
                                borderRadius:10
                                }}>
                    <View style={{flex:1, marginHorizontal:10}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>Ngày đặt hàng: {item.date}</Text>
                        <Text style={{marginVertical:10, fontWeight:'bold'}}>Sản phẩm: {item.product}</Text>
                        <Text style={{fontWeight:'bold'}}>Tổng giá: {item.price}</Text>
                        <Text style={{fontWeight:'bold', marginTop:10}}>Trạng thái: {item.status}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            )
        }

=======
  const renderItem = ({ item }) => {
>>>>>>> 57c869a0774350d35d66dd55cf0f0e81683fc254
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
