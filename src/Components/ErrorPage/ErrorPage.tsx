import React, { Component } from "react";
import { Button, Text, View } from "react-native";

interface Props {
  navigation: any;
}

export default class ErrorPage extends Component<Props> {
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View>
        <Text>Oops something went wrong</Text>
        <Button color="#3740FE" title="Go back" onPress={this.goBack} />
      </View>
    );
  }
}
