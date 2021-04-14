import { View } from "native-base";
import React, { Component } from "react";
import firebase from "../../Database/firebase";
import { MovieListProps, MovieListState } from "../../Utils/PropsState";
import SwipeValueBasedUi from "../SwipeValueBasedUi/SwipeValueBasedUi";
import { styles } from "./MovieListStyles";
export default class MovieList extends Component<
  MovieListProps,
  MovieListState
> {
  doThis = () => {
    // firebase.auth().currentUser;
    console.log("Button has been pressed", firebase.auth().currentUser?.uid);
  };
  render() {
    return (
      <View style={styles.container}>
        <SwipeValueBasedUi />
      </View>
    );
  }
}
