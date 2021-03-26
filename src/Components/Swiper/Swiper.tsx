import { Container, DeckSwiper, Text, View } from "native-base";
import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { CardModel } from "../../Models/Card.model";
import { addToList, generateRandomMovie } from "../../Service/ApiService";
import { SwiperProps, SwiperState } from "../../Utils/PropsState";
import Dashboard from "../Dashboard/Dashboard";
import { styles } from "./SwiperStyles";

const cards = generateRandomMovie();
export default class SwiperPage extends Component<SwiperProps, SwiperState> {
  private _deckSwiper: any;
  
  state: SwiperState = {
    swipedAllCards: false,
    swipeDirection: "",
    cardIndex: 0,
    yesList: [],
    noList: [],
    currentFilm: cards[0]
  };

  onSwiped = (yesOrNo: string, cardInfo: CardModel) => {
    if (!!cardInfo) {
      const arrayOfLists = [this.state.yesList, this.state.noList];
      const cardTitle = cardInfo.title;
      this.setState(currentState => ({
        ...currentState,
        yesList: addToList(cardTitle, arrayOfLists, yesOrNo)[0],
        noList: addToList(cardTitle, arrayOfLists, yesOrNo)[1],
      }));
    }
  };

  renderCards(item?: CardModel) {
    if (!!item) {
      this.state.currentFilm = item;
      return (
        <View>
          <Dashboard cards={item}></Dashboard>
        </View>
      );
    } else {
      return (
        <View style={styles.cardContainer}>
          <View style={styles.card} >
            <Text style={styles.title}>
              Oh no! Look's like there aren't any more films
            </Text>
            <Text style={styles.title}>Try again later</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Loser!</Text>
          </View>
        </View>
      );
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <View>
          <DeckSwiper
            ref={(c) => (this._deckSwiper = c)}
            dataSource={cards}
            // @ts-ignore  // This is a valid props var, but tsx doesn't like this
            looping={false}
            onSwipeLeft={(cardInfo: CardModel) => this.onSwiped("No", cardInfo)}
            onSwipeRight={(cardInfo: CardModel) => this.onSwiped("Yes", cardInfo)}
            renderEmpty={() => this.renderCards()}
            renderItem={(item: CardModel) => this.renderCards(item)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            paddingLeft: 56,
            paddingRight: 56,
          }}
        >
          <TouchableOpacity
            style={styles.buttonFacebookStyleCross}
            activeOpacity={0.5}
            onPress={() => {
              this._deckSwiper._root.swipeLeft();
              this.onSwiped("No", this.state.currentFilm);
            }}
          >
            <Image
              source={require("../../assets/Images/times-solid.svg")}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFacebookStylePlus}
            activeOpacity={0.5}
            onPress={() => {
              this._deckSwiper._root.swipeRight();
              this.onSwiped("Yes", this.state.currentFilm);
            }}
          >
            <Image
              source={require("../../assets/Images/plus-solid.svg")}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
