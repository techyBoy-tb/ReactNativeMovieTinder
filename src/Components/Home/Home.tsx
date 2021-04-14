import firebase from "firebase";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeProps, HomeState } from "../../Utils/PropsState";

export default class Home extends Component<HomeProps, HomeState> {
  goToStuff = () => {
    console.log("shit called");
    firebase.auth().onAuthStateChanged((user) => {
      console.log("inside auth");
      if (user) {
        this.props.navigation.navigate("TabViewPage");
      } else {
        this.props.navigation.navigate("Login");
      }
    });
  };
  render() {
    return (
      <View>
        <Text>Home page is working#</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={this.goToStuff}>
          <Text>Ok lets do this</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
