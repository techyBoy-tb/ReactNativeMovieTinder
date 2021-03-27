import React, { Component } from "react";
import { MovieListProps, MovieListState } from "../../Utils/PropsState";
import SwipeableItem from "../SwipeableItem/SwipeableItem";

export default class MovieList extends Component<
  MovieListProps,
  MovieListState
> {
  render() {
    return <SwipeableItem></SwipeableItem>;
  }
}
