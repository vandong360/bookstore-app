import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { updateUser } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import images from "../constants/images";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  const handleEdit = () => setEdit(!edit);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  React.useEffect(() => {
    if (user !== null) {
      setTimeout(() => setName(user.name), 100);
      setTimeout(() => setPhone(user.phone), 100);
      setTimeout(() => setAddress(user.address), 100);
    }
  }, [])

  const handleUpdate = async () => {
    const userId = user._id;
    const values = { name, phone, address };
    const response = await dispatch(updateUser({ userId, values }));
    if (response.payload.success) {
      Alert.alert("Đã cập nhật thông tin user!")
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.bgProfile} style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ justifyContent: "center" }}
        >
          <View style={styles.content}>
            <View
              style={{ alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#dbdbdb", paddingBottom: 20 }}
            >
              <Image
                source={images.avtDrawer}
                style={{ width: 130, height: 130, borderRadius: 65, marginTop: 40 }}
              ></Image>
              <Text style={{ textAlign: "center", fontSize: 14 }}>{user !== null ? user.username : ''}</Text>
            </View>

            <View style={{ marginTop: 30 }}>
              <View style={{ flexDirection: "row", marginLeft: 20 }}>
                <Image
                  source={images.profile}
                  style={{ width: 15, height: 15, tintColor: "orange", marginRight: 5 }}
                ></Image>
                <Text style={{ fontSize: 12 }}>NAME</Text>
              </View>
              <View>
                <TextInput
                  editable={edit}
                  style={{
                    height: 40,
                    marginTop: 12,
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#dbdbdb",
                    fontWeight: "bold",
                    padding: 10,
                  }}
                  value={name}
                  onChangeText={(name) => setName(name)}
                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ marginLeft: 20, flexDirection: "row" }}>
                <Image
                  source={images.phone}
                  style={{ width: 15, height: 15, tintColor: "orange", marginRight: 5 }}
                ></Image>
                <Text style={{ fontSize: 12 }}>PHONE NUMBER</Text>
              </View>
              <View>
                <TextInput
                  editable={edit}
                  style={{
                    height: 40,
                    marginTop: 12,
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#dbdbdb",
                    fontWeight: "bold",
                    padding: 10,
                  }}
                  value={phone}
                  onChangeText={(phone) => setPhone(phone)}
                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row", marginLeft: 20 }}>
                <Image
                  source={images.address}
                  style={{ width: 15, height: 15, tintColor: "orange", marginRight: 5 }}
                ></Image>
                <Text style={{ fontSize: 12 }}>ADDRESS</Text>
              </View>
              <View>
                <TextInput
                  name="address"
                  editable={edit}
                  style={{
                    height: 40,
                    marginTop: 12,
                    marginHorizontal: 20,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#dbdbdb",
                    fontWeight: "bold",
                    padding: 10,
                  }}
                  value={address}
                  onChangeText={(address) => setAddress(address)}
                />
              </View>
            </View>
            
            <View style={{flexDirection:"row", paddingLeft:20}}>
            <TouchableOpacity
              onPress={() => handleEdit()}
              style={{
                width: 70,
                height: 40,
                backgroundColor: "#42AB41",
                left: "40%",
                paddingVertical: 6,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "bold", color: "#FFF" }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleUpdate}
              style={{
                width: 120,
                height: 40,
                backgroundColor: "orange",
                left: "40%",
                paddingVertical: 6,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "bold", color: "#FFF" }}>Lưu thay đổi</Text>
            </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    width: "77%",
    height: 610,
    backgroundColor: "#FFF",
    marginHorizontal: "12%",
    marginBottom: "20%",
    borderRadius: 30,
    opacity: 0.9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
});

export default Profile;
