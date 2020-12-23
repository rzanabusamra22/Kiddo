// frontend/screens/subScrees/Fruits.js
import React, { Component, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image, StyleSheet, Text, View } from "react-native";

// Static values container
const slides = [
  { key: "apple", image: { uri: "https://i.imgur.com/wsoPVEv.png" } },
  { key: "banana", image: { uri: "https://i.imgur.com/BvhbhNN.png" } },
  { key: "grapes", image: { uri: "https://i.imgur.com/mWakr8I.png" } },
  { key: "mango", image: { uri: "https://i.imgur.com/1QxBVgk.png" } },
  { key: "orange", image: { uri: "https://i.imgur.com/2DLs5lr.png" } },
];

// Delecious!
class Fruits extends Component {
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

export default Fruits;
