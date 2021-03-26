// components/signup.js

import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,

  Text,
  TextInput,
  View
} from "react-native";
import firebase from "../../Database/firebase";
import { SignUpProps, SignUpState } from "../../Utils/PropsState";
import { styles } from "./SignupStyles";
export default class Signup extends Component<SignUpProps, SignUpState> {
  state: SignUpState = {
    displayName: "",
    email: "",
    password: "",
    isLoading: false,
  };

  updateInputVal = (val: string, prop: string) => {
    this.setState((currentState) => ({
      ...currentState, 
      [prop]: val
    }));
  };

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          if (!!res && !!res.user) {
            res.user.updateProfile({
              displayName: this.state.displayName,
            });
            console.log("User registered successfully!");
            this.setState({
              isLoading: false,
              displayName: "",
              email: "",
              password: "",
            });
            this.props.navigation.navigate("SwiperPage");
          } else {
            throw Error;
          }
        }).catch((error) => {
          this.setState({
            errorMessage: error.message,
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
          });
          this.props.navigation.navigate("ErrorPage");
        });
      
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, "displayName")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => this.registerUser()}
        />

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Already Registered? Click here to login
        </Text>
      </View>
    );
  }
}
