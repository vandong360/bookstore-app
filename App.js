import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import MenuDrawer from "./navigation/MenuDrawer";
import store from "./store/store.js";
import Login from "./screens/Login";
import Register from "./screens/Register";
import BottomNavigator from "./navigation/BottomNavigator";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={MenuDrawer} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
