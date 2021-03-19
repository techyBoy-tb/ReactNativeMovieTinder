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

  like = () => {};

  dislike = () => {};

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
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{this.props.cardInfo.title}</Text>
          <Image
            style={styles.imageStyle}
            source={{
              uri: this.props.cardInfo.imageURL,
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonFacebookStyleCross}
              activeOpacity={0.5}
              onPress={() => this.dislike()}
            >
              <Image
                source={require("../../assets/Images/times-solid.svg")}
                style={styles.buttonImageIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFacebookStylePlus}
              activeOpacity={0.5}
              onPress={() => this.like()}
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
