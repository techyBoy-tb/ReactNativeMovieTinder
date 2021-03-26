import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  cards: any;
}
// interface State {
//   uid: "",
// }
export default class Dashboard extends Component<Props> {
  // constructor() {
  //   super();
  state = {
    uid: "",
  };
  // }

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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
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

    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
