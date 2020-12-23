// frontend/src/screens/subScrees/Alphabet.js
import React, { Component, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image, StyleSheet, Text, View } from "react-native";

// Static info without using the database fetch for the alphabet
const slides = [
  { key: "A", image: { uri: "https://i.imgur.com/nTnaSnC.png" } },
  { key: "B", image: { uri: "https://i.imgur.com/JUo3oew.png" } },
  { key: "C", image: { uri: "https://i.imgur.com/12ve8qR.png" } },
  { key: "D", image: { uri: "https://i.imgur.com/7lwGMFf.png" } },
  { key: "E", image: { uri: "https://i.imgur.com/zEiJiMA.png" } },
  { key: "F", image: { uri: "https://i.imgur.com/eBaDmhl.png" } },
  { key: "G", image: { uri: "https://i.imgur.com/1mXAQRS.png" } },
  { key: "H", image: { uri: "https://i.imgur.com/NQ7WI4F.png" } },
  { key: "I", image: { uri: "https://i.imgur.com/HoO98OY.png" } },
  { key: "J", image: { uri: "https://i.imgur.com/jKZJ0KC.png" } },
  { key: "K", image: { uri: "https://i.imgur.com/TwrxTj8.png" } },
  { key: "L", image: { uri: "https://i.imgur.com/L5L50HD.png" } },
  { key: "M", image: { uri: "https://i.imgur.com/o4dJoLb.png" } },
  { key: "N", image: { uri: "https://i.imgur.com/R77XXRw.png" } },
  { key: "O", image: { uri: "https://i.imgur.com/kM7iFVI.png" } },
  { key: "P", image: { uri: "https://i.imgur.com/5r777DK.png" } },
  { key: "Q", image: { uri: "https://i.imgur.com/JDRM4cT.png" } },
  { key: "R", image: { uri: "https://i.imgur.com/IC0nRrt.png" } },
  { key: "S", image: { uri: "https://i.imgur.com/2dlmeV4.png" } },
  { key: "T", image: { uri: "https://i.imgur.com/q4uy79U.png" } },
  { key: "U", image: { uri: "https://i.imgur.com/PGN7nRu.png" } },
  { key: "V", image: { uri: "https://i.imgur.com/r5ZHPed.png" } },
  { key: "W", image: { uri: "https://i.imgur.com/UP6t5gd.png" } },
  { key: "X", image: { uri: "https://i.imgur.com/vfwzBKE.png" } },
  { key: "Y", image: { uri: "https://i.imgur.com/NEdp3C6.png" } },
  { key: "Z", image: { uri: "https://i.imgur.com/BhifPhf.png" } },
];

// English letters
class Alphabet extends Component {
  constructor() {
    super();
    this.state = {};
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image
          source={item.image}
          style={{
            height: 600,
            width: 400,
          }}
        />
      </View>
    );
  };
  render() {
    return <AppIntroSlider renderItem={this._renderItem} data={slides} />;
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Alphabet;
