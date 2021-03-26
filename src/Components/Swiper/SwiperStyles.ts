import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6d6c2",
  },

  cardContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title: {
    fontSize: 24,
    textAlign: "center",
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
  buttonFacebookStyleCross: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff4d4d",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 100,
    margin: 5,
  },
  buttonFacebookStylePlus: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#70db70",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 100,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
});
