import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TabViewProps, TabViewState } from "../../Utils/PropsState";
import MovieList from "../MovieList/MovieList";
import Swiper from "../Swiper/Swiper";

const Tab = createBottomTabNavigator();

export default class TabViewPage extends Component<TabViewProps, TabViewState> {
  render() {
    return (
      // <View style={styles.container}>
      //   <FontAwesome5 name="fire" size={27} color="#F06795" />
      //   <FontAwesome name="comments" size={27} color="#5c5c5c" />
      //   <FontAwesome name="user" size={27} color="#5c5c5c" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#F06795",
          activeBackgroundColor: "#ccc",
        }}
      >
        {/* <MaterialCommunityIcons
                name="movie-open-plus-outline"
                color={color}
                size={size}
              /> */}
        <Tab.Screen
          name="Movies"
          component={Swiper}
          options={{
            tabBarLabel: "Movies",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="film" size={27} color={color} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="MovieList"
          component={MovieList}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="list" size={27} color={color} />
            ),
          }}
        ></Tab.Screen>
        {/* <Tab.Screen name="Error" component={Error}></Tab.Screen> */}
      </Tab.Navigator>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
