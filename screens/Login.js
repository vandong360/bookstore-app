import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import { Formik } from "formik";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import KeyboardAvoiding from "../KeyboardAvoiding";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";

const Login = ({ navigation }) => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    navigation.navigate("Home");
  }

  const handleLogin = async (credentials, setSubmitting) => {
    const response = await dispatch(login(credentials));

    if (response.payload.success) {
      navigation.navigate("Home");
    } else {
      console.log(response.payload.message);
    }
    setSubmitting(false);
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 650, backgroundColor: "#ebb859", borderRadius: 30 }}>
        <Text style={styles.title}>WELCOME</Text>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.username == "" || values.password == "") {
              handleMessage("Please fill all the fields");
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
            <View style={styles.loginForm}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginTop: 100,
                  marginBottom: 20,
                  color: "gray",
                }}
              >
                ĐĂNG NHẬP
              </Text>

              <View>
                <TextInput
                  style={styles.input}
                  placeholder="username"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
                <TextInput
                  style={styles.input}
                  placeholder="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <Text
                  style={{
                    textAlign: "right",
                    marginRight: 42,
                    marginBottom: 30,
                    color: "#ebb859",
                  }}
                >
                  Quên mật khẩu ?
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    color: "red",
                  }}
                  type={messageType}
                >
                  {message}
                </Text>
                {!isSubmitting && (
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                  </TouchableOpacity>
                )}
                {isSubmitting && (
                  <TouchableOpacity style={styles.button} disabled={true}>
                    <ActivityIndicator size="large" color="white"></ActivityIndicator>
                  </TouchableOpacity>
                )}
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    color: "#ebb859",
                  }}
                >
                  Đăng ký
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  title: {
    color: "#FFF",
    marginTop: 100,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  loginForm: {
    height: 530,
    backgroundColor: "#F7F7F7",
    width: 350,
    marginHorizontal: 30,
    marginTop: 100,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 4,
  },

  input: {
    width: 280,
    height: 50,
    backgroundColor: "#fff",
    marginVertical: 20,
    marginHorizontal: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    paddingLeft: 20,
  },

  button: {
    alignItems: "center",
    width: 285,
    backgroundColor: "#ebb859",
    height: 50,
    marginHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 12,
  },
});

export default Login;
