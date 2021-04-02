import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { ErrorProps, ErrorState } from "../../Utils/PropsState";

export default class Error extends Component<ErrorProps, ErrorState> {
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
