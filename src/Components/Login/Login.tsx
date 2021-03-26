// components/login.js

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
import { LoginProps, LoginState } from "../../Utils/PropsState";
import { styles } from "./LoginStyles";
export default class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
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

  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log("User logged-in successfully!");
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("SwiperPage");
        })
        .catch((error) => {
          this.setState({
            errorMessage: error.message,
            isLoading: false,
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
          title="Signin"
          onPress={() => this.userLogin()}
        />

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          Don't have account? Click here to signup
        </Text>
      </View>
    );
  }
}
