import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";
import firebase from "../../Database/firebase";
import { AnonProps, AnonState } from "../../Utils/PropsState";
import { styles } from "./AnonStyles";

export default class Anon extends Component<AnonProps, AnonState> {
  state: AnonState = {
    name: "",
  };

  updateInputVal = (val: string, prop: string) => {
    this.setState((currentState) => ({
      ...currentState,
      [prop]: val,
    }));
  };

  anonLogin = () => {
    // try {
    //   firebase.auth().signInAnonymously();
    //   this.props.navigation.navigate("TabViewPage");
    // } catch (err) {
    //   Alert.alert("Oopsie there has been an error");
    //   console.log("There has been an error: ", err);
    // }
    // firebase
    //   .auth()
    //   .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    //   .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    firebase.auth().signInAnonymously();
    this.props.navigation.navigate("TavViewPage");
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.name}
          onChangeText={(val) => this.updateInputVal(val, "name")}
          maxLength={15}
        />
        <Button
          color="#3740FE"
          title="Let's go"
          onPress={() => this.anonLogin()}
        />
      </View>
    );
  }
}
