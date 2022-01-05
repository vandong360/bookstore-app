import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Button } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import images from "../constants/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../store/slices/cartSlice";

const Cart = ({ route, navigation }) => {
  const { cart, itemCart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [cartArr, setCarts] = React.useState(itemCart);

  React.useEffect(() => {
    setCarts(itemCart);
  }, [itemCart]);

  const cartId = cart._id;
  const totalPrice = cartArr.reduce((summedPrice, product) => summedPrice + product.productPrice * product.quantity, 0);
  const amount = cartArr.reduce((amount, product) => amount + product.quantity, 0);

  const submitOrder = async () => {
    const products = cartArr.map((c) => {
      return {
        productId: c.productId,
        productName: c.productName,
        productImg: c.productImg,
        price: c.productPrice,
        quantity: c.quantity,
      };
    });

    // console.log(products);
    const newOrder = {
      userId: user._id,
      userName: user.name,
      products: products,
      amount: amount,
      totalPrice: totalPrice,
      address: user.address,
      phone: user.phone,
    };
    navigation.navigate("Checkout", { newOrder });
  };

  function renderListProduct(cart) {
    const arr = [];
    let products = arr.concat(cart);

    function renderItem({ item, index }) {
      const decreased = async () => {
        if (item.quantity > 1) {
          let obj = products[index];
          let nobj = { ...obj };
          nobj.quantity = item.quantity - 1;
          products.splice(index, 1, nobj);
          setCarts(products);

          //cap nhat len mongodb
          const values = { cartId, products };
          await dispatch(updateCart(values));
        }
      };

      const increased = async () => {
        let obj = products[index];
        let nobj = { ...obj };
        nobj.quantity = item.quantity + 1;
        products.splice(index, 1, nobj);
        setCarts(products);

        //cap nhat len mongodb
        const values = { cartId, products };
        await dispatch(updateCart(values));
      };

      const removeItem = async () => {
        products.splice(index, 1);
        setCarts(products);

        //cap nhat len mongodb
        const values = { cartId, products };
        await dispatch(updateCart(values));
      };

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
          {/* {renderQty} */}
          <Image
            source={{ uri: item.productImg }}
            resizeMode="cover"
            style={{
              width: 80,
              height: 120,
              borderRadius: 10,
            }}
          ></Image>

          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold", flex: 1 }}>{item.productName}</Text>
            </View>

            <View style={{ height: 45 }}>
              <View style={styles.discount}>
                <Text style={{ fontWeight: "bold", color: "#FFF" }}>{item.productDiscount} %</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
              <View style={styles.qty}>
                <TouchableOpacity onPress={decreased}>
                  <Image source={images.minus} style={{ width: 13, height: 13, tintColor: "#FFF" }}></Image>
                </TouchableOpacity>
              </View>
              <Text style={{ marginRight: 10, fontWeight: "bold" }}>{item.quantity}</Text>
              <View style={styles.qty}>
                <TouchableOpacity onPress={increased}>
                  <Image source={images.plus} style={{ width: 13, height: 13, tintColor: "#FFF" }}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity style={{ left: "80%" }} onPress={removeItem}>
              <Image source={images.close} style={{ width: 12, height: 12 }}></Image>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "#ED2629" }}>
                {item.productPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
              </Text>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={{ height: "80%", marginBottom: 20 }}>
        <FlatList
          data={cartArr}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={true}
        ></FlatList>

        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Tổng</Text>
            <Text style={{ fontWeight: "bold", textAlign: "right", color: "#ED2629" }}>
              {totalPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderListProduct(cartArr)}
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
          onPress={submitOrder}
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
    paddingVertical: 3,
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
  discount: {
    flex: 1,
    width: 45,
    height: 15,
    backgroundColor: "#DE3538",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
  },
});

export default Cart;
