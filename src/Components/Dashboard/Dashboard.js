// components/dashboard.js

import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  // signOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       this.props.navigation.navigate("Login");
  //     })
  //     .catch((error) => this.setState({ errorMessage: error.message }));
  // };

  render() {
    // this.state = {
    //   displayName: firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid,
    // };
    // var yourPicture = require("https://upload.wikimedia.org/wikipedia/en/7/7e/Die_hard.jpg");

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Die hard</Text>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/en/4/4c/Die_Hard_With_A_Vengance.jpg",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonFacebookStyleCross}
              activeOpacity={0.5}
            >
              <Image
                source={require("../../assets/Images/times-solid.svg")}
                style={styles.buttonImageIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFacebookStylePlus}
              activeOpacity={0.5}
            >
              <Image
                source={require("../../assets/Images/plus-solid.svg")}
                style={styles.buttonImageIconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonFacebookStyleCross: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff4d4d",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 100,
    margin: 5,
  },
  buttonFacebookStylePlus: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#70db70",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 100,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },

  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "#d6d6c2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  imageStyle: {
    height: "60vh",
    width: "75vw",
    resizeMethod: "resize",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
