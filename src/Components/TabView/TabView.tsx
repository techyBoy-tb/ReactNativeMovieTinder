import React, { Component } from "react";
import { Dimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { TabViewProps, TabViewState } from "../../Utils/PropsState";
import MovieList from "../MovieList/MovieList";
import Swiper from "../Swiper/Swiper";

export default class TavView extends Component<TabViewProps, TabViewState> {
  renderScene = () => {
    return SceneMap({
      first: Swiper,
      second: MovieList,
    });
  };
  render() {
    let index = 0;
    const routes = [
      { key: "first", title: "Match" },
      { key: "second", title: "List" },
    ];
    const initialLayout = { width: Dimensions.get("window").width };
    return (
      // @ts-ignore  // This is a valid props var, but tsx doesn't like this
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={() => index++}
        renderScene={this.renderScene()}
        initialLayout={initialLayout}
        swipeEnabled={false}
      />
    );
  }
}
