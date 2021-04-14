// components/login.js

import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Text,
  TextInput,
  View,
} from "react-native";
import firebase from "../../Database/firebase";
import { LoginProps, LoginState } from "../../Utils/PropsState";
import { styles } from "./LoginStyles";
export default class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    email: "",
    password: "",
    isLoading: true,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("inside auth");
      if (user) {
        this.props.navigation.navigate("TabViewPage");
      }
      this.state.isLoading = false;
    });
  }

  updateInputVal = (val: string, prop: string) => {
    this.setState((currentState) => ({
      ...currentState,
      [prop]: val,
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
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log("user is logged", user);
    //     this.props.navigation.navigate("TabViewPage");
    //   }
    // });
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
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("Anon")}
        >
          Don't have account and dont wan to make one? Click here to continue.
        </Text>
      </View>
    );
  }
}
