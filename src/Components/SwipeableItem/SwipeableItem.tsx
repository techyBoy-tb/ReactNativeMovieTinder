import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SwipeButtonsContainer, SwipeItem } from "react-native-swipe-item";
import { SwipeableItemProps, SwipeableItemState } from "../../Utils/PropsState";
import { styles } from "./SwipeableItemStyles";

export default class SwipeableItem extends Component<
  SwipeableItemProps,
  SwipeableItemState
> {
  render() {
    const leftButton = (
      <SwipeButtonsContainer
        style={{
          alignSelf: "center",
          aspectRatio: 1,
          flexDirection: "column",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => console.log("left button clicked")}>
          <Text>Click me !</Text>
        </TouchableOpacity>
      </SwipeButtonsContainer>
    );
    return (
      <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        leftButtons={leftButton}
      >
        <Text>Swipe me!</Text>
      </SwipeItem>
    );
  }
}
