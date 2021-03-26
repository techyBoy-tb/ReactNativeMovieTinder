import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ErrorPage from "./src/Components/ErrorPage/ErrorPage";
import Login from "./src/Components/LoginPage/Login";
import Signup from "./src/Components/SignUpPage/SignUpPage";
import SwiperPage from "./src/Components/SwiperPage/SwiperPage";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="SwiperPage"
        component={SwiperPage}
      />
      <Stack.Screen
        name="ErrorPage"
        component={ErrorPage}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
