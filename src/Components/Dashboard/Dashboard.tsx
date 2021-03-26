import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { DashboardProps, DashboardState } from "../../Utils/PropsState";
import { styles } from "./DashboardStyles";
export default class Dashboard extends Component<DashboardProps, DashboardState> {
  state = {
    uid: "",
  };

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
          <Text style={styles.title}>{this.props.cards.title}</Text>
          <Image
            style={styles.imageStyle}
            source={{
              uri: this.props.cards.imageURL,
            }}
          />
        </View>
      </View>
    );
  }
}
