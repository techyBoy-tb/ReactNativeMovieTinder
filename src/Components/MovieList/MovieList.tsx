import { View } from "native-base";
import React, { Component } from "react";
import { MovieListProps, MovieListState } from "../../Utils/PropsState";
import SwipeValueBasedUi from "../SwipeValueBasedUi/SwipeValueBasedUi";
import { styles } from "./MovieListStyles";
export default class MovieList extends Component<
  MovieListProps,
  MovieListState
> {
  render() {
    const renderExample = () => {
      // const Component = SwipeValueBasedUi;
      return <SwipeValueBasedUi />;
    };

    return <View style={styles.container}>{renderExample()}</View>;
  }
}
