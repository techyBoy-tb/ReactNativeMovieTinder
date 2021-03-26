import { Container, DeckSwiper, Text, View } from "native-base";
import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { addToList, generateRandomMovie } from "../../Service/ApiService";
import Dashboard from "../Dashboard/Dashboard";
import { styles } from "./SwiperPageStyles";

export interface SwiperProps {

}

export interface SwiperState {
  swipedAllCards: boolean,
  swipeDirection: string,
  cardIndex: number,
  yesList: Array<string>,
  noList: Array<string>,
  currentFilm: Object,
}
const cards = generateRandomMovie();
export default class SwiperPage extends Component<SwiperProps, SwiperState> {
  private _deckSwiper: any;
  
  state: SwiperState = {
    swipedAllCards: false,
    swipeDirection: "",
    cardIndex: 0,
    yesList: [],
    noList: [],
    currentFilm: {},
  };

  onSwiped = (yesOrNo: string, cardInfo: any) => {
    if (!!cardInfo) {
      const arrayOfLists = [this.state.yesList, this.state.noList];
      const cardTitle = cardInfo.title;
      this.setState({
        yesList: addToList(cardTitle, arrayOfLists, yesOrNo)[0],
        noList: addToList(cardTitle, arrayOfLists, yesOrNo)[1],
      });
    }
  };

  renderCards(item: string) {
    this.state.currentFilm = item;
    if (!!item) {
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
            // looping={false}
            onSwipeLeft={(cardInfo: any) => this.onSwiped("No", cardInfo)}
            onSwipeRight={(cardInfo: any) => this.onSwiped("Yes", cardInfo)}
            renderEmpty={() => this.renderCards('')}
            renderItem={(item: string) => this.renderCards(item)}
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
