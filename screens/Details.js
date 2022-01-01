import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Details = ({ route, navigation }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={{ marginTop: 10, backgroundColor: "#fff" }} onPress={() => navigation.goBack()}>
          <Text>
            <Ionicons name="arrow-back" size={20} color="black"></Ionicons>
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", width: "100%", height: 400, backgroundColor: "#fff" }}>
          <Text style={{ marginTop: 10, marginHorizontal: 10, fontWeight: "bold", fontSize: 18, color: "#3e4242" }}>
            {book.name}
          </Text>
          <Image style={styles.Image} source={book.image ? { uri: book.image } : null} />
        </View>
        <Text style={{ marginTop: 10, marginHorizontal: 10, fontWeight: "bold", fontSize: 14, color: "gray" }}>
          {book.author}
        </Text>
        <Text style={{ marginTop: 10, marginHorizontal: 10, fontWeight: "bold", fontSize: 18, color: "#ebb859" }}>
          {book.price} đ
        </Text>

        <View
          style={{
            flexDirection: "row",
            height: 90,
            marginTop: 50,
            backgroundColor: "#fff",
            paddingTop: 20,
            marginHorizontal: 18,
            borderRadius: 20,
          }}
        >
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#ebb859" }}>Số Trang</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#3e4242" }}>
              {book.soTrang}
            </Text>
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#ebb859" }}>Đánh giá</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#3e4242" }}>
              {book.rating}
            </Text>
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#ebb859" }}>Xuất Bản</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 14, color: "#3e4242" }}>
              {book.namXB}
            </Text>
          </View>
        </View>

        <Text style={{ marginTop: 20, marginHorizontal: 18, fontSize: 14, color: "gray" }}>{book.description}</Text>

        <View style={{ flexDirection: "row", height: 90, marginTop: 50, paddingTop: 20, marginHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "row",
              width: 200,
              backgroundColor: "#f7f7f7",
              paddingTop: 20,
              marginHorizontal: 10,
              borderRadius: 20,
            }}
          >
            <View style={{ width: 70 }}>
              <Text style={{ textAlign: "center", fontWeight: "bold" }}>QTY</Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 40 }}>
              <Text style={{ marginRight: 20 }}>-</Text>
              <Text style={{ marginRight: 20 }}>1</Text>
              <Text style={{ marginRight: 20 }}>+</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: 140,
                height: 70,
                backgroundColor: "#ebb859",
                paddingTop: 20,
                marginHorizontal: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", color: "#FFF", fontWeight: "bold" }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Image: {
    width: 220,
    height: 300,
    marginTop: 40,
    borderRadius: 20,
  },
});

export default Details;
