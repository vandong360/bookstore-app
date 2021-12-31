import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Keyboard, Platform } from "react-native";
import { Formik } from "formik";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import KeyboardAvoiding from "../KeyboardAvoiding";
import { register } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ navigation }) => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const dispatch = useDispatch();

  const handleSignup = async (values, setSubmitting) => {
    const response = await dispatch(register({values}));

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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ justifyContent: "center" }}
      >
        <View style={{ height: 650, backgroundColor: "#ebb859", borderRadius: 30 }}>
          <Text style={styles.title}>WELCOME</Text>
          <Formik
            initialValues={{ username: "", password: "", name: "", address: "", phone: "", confirmPassword: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                values.username == "" ||
                values.password == "" ||
                values.name == "" ||
                values.address == "" ||
                values.phone == "" ||
                values.confirmPassword == ""
              ) {
                handleMessage("Please fill all the fields");
                setSubmitting(false);
              } else if (values.password !== values.confirmPassword) {
                handleMessage("Passwords do not match");
                setSubmitting(false);
              } else {
                delete values.confirmPassword;
                handleSignup(values, setSubmitting);
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
                    marginTop: 30,
                    marginBottom: 20,
                    color: "gray",
                  }}
                >
                  ĐĂNG KÝ
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
                    placeholder="name"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    secureTextEntry={true}
                    value={values.password}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    secureTextEntry={true}
                    value={values.confirmPassword}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="phone"
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="address"
                    onChangeText={handleChange("address")}
                    onBlur={handleBlur("address")}
                    value={values.address}
                  />

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
                      <Text style={styles.buttonText}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                  )}
                  {isSubmitting && (
                    <TouchableOpacity style={styles.button} disabled={true}>
                      <ActivityIndicator size="large" color="white"></ActivityIndicator>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        color: "#ebb859",
                      }}
                    >
                      Đăng nhập
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
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
    marginTop: 90,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  loginForm: {
    height: 600,
    backgroundColor: "#F7F7F7",
    width: 350,
    marginHorizontal: 30,
    marginTop: 10,
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
    marginVertical: 7,
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

export default Register;
