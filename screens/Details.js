import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Rating from "../Components/rating";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateCart } from "../store/slices/cartSlice";
import images from "../constants/images";

const dataItem = (productId, productImg, productName, productPrice, productDiscount, quantity) => {
  return { productId, productImg, productName, productPrice, productDiscount, quantity };
};

const Details = ({ route, navigation }) => {
  const [Quantity, setQuantt] = React.useState(1);
  const { book } = route.params;
  const { cart, itemCart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const decreased = () => {
    if (Quantity > 1) setQuantt(Quantity - 1);
  };

  const increased = () => {
    setQuantt(Quantity + 1);
  };

  const checkItem = (bookId) => {
    let groupId = [];
    itemCart.map((item) => {
      groupId.push(item.productId);
    });
    console.log(groupId);

    const checking = groupId.indexOf(bookId);
    console.log(checking);
  };

  const handleAddCart = async () => {
    const cartId = cart._id;
    const item = dataItem(book._id, book.image, book.name, book.price, book.discount, Quantity);

    const p = [];
    let products = p.concat(itemCart);

    products.includes(book._id);

    products.push(item);

    const values = { cartId, products };
    const response = await dispatch(updateCart(values));

    if (response.payload.success) {
      Alert.alert("Đã thêm vào giỏ hàng");
      await dispatch(getCart(user._id));
    } else Alert.alert("Không thành công");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginTop: 10, backgroundColor: "#fff", height:30 }} onPress={() => navigation.goBack()}>
        <Image source={images.back} style={{width:20, height:20, top:10, left:10}}></Image>
      </TouchableOpacity>

      <View style={styles.view}>
        <Text style={{ marginTop: 10, marginHorizontal: 10, fontWeight: "bold", fontSize: 18, color: "#3e4242" }}>
          {book.name}
        </Text>
        <Image style={styles.Image} source={book.image ? { uri: book.image } : null} />
      </View>

      <View style={{ height: "7%" }}>
        <Text style={{ marginTop: 8, marginHorizontal: 10, fontWeight: "bold", fontSize: 14, color: "gray" }}>
          Tác giả: {book.author}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginTop: 8, marginHorizontal: 10, fontWeight: "bold", fontSize: 18, color: "#ebb859" }}>
            {book.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ
          </Text>
          <Text style={styles.price}>{book.oldPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} đ</Text>
          <View style={styles.discount}>
            <Text style={{ marginVertical: 3, fontWeight: "bold", color: "white" }}>{book.discount} %</Text>
          </View>
        </View>
      </View>

      <View style={styles.block}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#3e4242" }}>Số Trang</Text>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#ebb859", marginTop: 6 }}>
            {book.soTrang}
          </Text>
        </View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#3e4242" }}>Đánh giá</Text>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14 }}>
            <Rating rating={book.rating}> </Rating>
          </Text>
        </View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#3e4242" }}>Xuất Bản</Text>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#ebb859", marginTop: 6 }}>
            {book.namXB}
          </Text>
        </View>
      </View>

      <View>
        <Text style={{ marginHorizontal: 10, fontSize: 16, fontWeight: "bold" }}>Mô tả</Text>
        <ScrollView style={{ height: "14%" }}>
          <Text style={{ marginTop: 10, marginHorizontal: 18, fontSize: 14, color: "gray" }}>{book.description}</Text>
        </ScrollView>
      </View>

      <View style={{ flexDirection: "row", height: "11%", marginTop: 10, paddingTop: 20, marginHorizontal: 16 }}>
        <View style={styles.quant}>
          <View style={{ width: 70 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>QTY</Text>
          </View>
          <View style={{ flexDirection: "row", paddingLeft: 40 }}>
            <TouchableOpacity onPress={decreased} style={{ marginTop: 6 }}>
              <Image source={images.minus} style={{ width: 13, height: 13 }}></Image>
            </TouchableOpacity>
            <View>
              <Text style={{ marginHorizontal: 15, fontWeight: "bold", fontSize: 16 }}>{Quantity}</Text>
            </View>
            <TouchableOpacity onPress={increased} style={{ marginTop: 6 }}>
              <Image source={images.plus} style={{ width: 13, height: 13 }}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddCart}>
            <Text style={{ textAlign: "center", color: "#FFF", fontWeight: "bold" }}>Thêm vào Giỏ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Image: {
    width: 220,
    height: "70%",
    marginTop: 40,
    borderRadius: 20,
  },
  view: {
    alignItems: "center",
    width: "100%",
    height: "46%",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  price: {
    marginTop: 9,
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#C0CCCC",
    textDecorationLine: "line-through",
  },
  discount: {
    width: 45,
    height: 30,
    backgroundColor: "#EDBD9A",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 3,
    marginHorizontal: 10,
  },
  block: {
    flexDirection: "row",
    height: "10%",
    marginVertical: 18,
    backgroundColor: "#fff",
    paddingTop: 20,
    marginHorizontal: 18,
    borderRadius: 20,
  },
  quant: {
    flexDirection: "row",
    width: 200,
    backgroundColor: "#f7f7f7",
    paddingTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  buttonAdd: {
    width: 140,
    height: 70,
    backgroundColor: "#ebb859",
    paddingTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});

export default Details;
