import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Error from "./src/Components/Error/Error";
import Login from "./src/Components/Login/Login";
import Signup from "./src/Components/SignUp/SignUp";
import Swiper from "./src/Components/Swiper/Swiper";
import TabView from "./src/Components/TabView/TabView";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabView"
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Swiper" component={Swiper} />
      <Stack.Screen name="Error" component={Error} />
      <Stack.Screen name="TabView" component={TabView} />
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
