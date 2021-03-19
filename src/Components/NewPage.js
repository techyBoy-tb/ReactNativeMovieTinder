// components/login.js

import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import {
  addToNoList,
  addToYesList,
  generateRandomMovie,
} from "../Service/ApiService";
import Dashboard from "./Dashboard/dashboard";

function* getCard() {
  yield generateRandomMovie();
}
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [...getCard()],
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
      yesList: [],
      noList: [],
    };
  }

  renderCard = (card) => {
    return <Dashboard cardInfo={card} />;
  };

  onSwiped = (typeOfSwipe, cardTitle) => {
    switch (typeOfSwipe) {
      case "right":
        console.log(`You have said yes to ${cardTitle}`);
        this.state.yesList = addToYesList(cardTitle, this.state.yesList);
        console.log("this is the yes list, ", this.state.yesList);
        console.log("this is the no list, ", this.state.noList);
        break;
      case "left":
        console.log(`You have said No to ${cardTitle}`);
        this.state.noList = addToNoList(cardTitle, this.state.noList);
        console.log("this is the yes list, ", this.state.yesList);
        console.log("this is the no list, ", this.state.noList);
        break;
      default:
        console.log(`Neither left nor right for ${cardTitle}`);
    }
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  undo = () => {
    this.swiper.swipeBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          onSwiped={() =>
            this.onSwiped(
              "general",
              this.state.cards[this.state.cardIndex].title
            )
          }
          onSwipedLeft={() =>
            this.onSwiped("left", this.state.cards[this.state.cardIndex].title)
          }
          onSwipedRight={() =>
            this.onSwiped("right", this.state.cards[this.state.cardIndex].title)
          }
          onSwipedTop={() =>
            this.onSwiped("top", this.state.cards[this.state.cardIndex].title)
          }
          onSwipedBottom={() =>
            this.onSwiped(
              "bottom",
              this.state.cards[this.state.cardIndex].title
            )
          }
          // onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: "BLEAH",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: "SUPER LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          <Button onPress={() => this.undo} title="Swipe Back" />
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 24,
  },
});
