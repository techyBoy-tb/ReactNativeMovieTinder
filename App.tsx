import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { AppState } from "react-native";
import Anon from "./src/Components/Anon/Anon";
import Error from "./src/Components/Error/Error";
import Home from "./src/Components/Home/Home";
import Login from "./src/Components/Login/Login";
import Signup from "./src/Components/SignUp/SignUp";
import Swiper from "./src/Components/Swiper/Swiper";
import TabViewPage from "./src/Components/TabViewPage/TabViewPage";
import { AppProps } from "./src/Utils/PropsState";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Swiper" component={Swiper} />
      <Stack.Screen name="Error" component={Error} />
      <Stack.Screen name="TabViewPage" component={TabViewPage} />
      <Stack.Screen name="Anon" component={Anon} />
    </Stack.Navigator>
  );
}

export default class App extends Component<AppProps, AppState> {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
