// frontend/src/screens/subScrees/BodyPart.js
import React, { Component, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image, StyleSheet, Text, View } from "react-native";

// Initial info before the database
const slides = [
  { key: "Ears", image: { uri: "https://i.imgur.com/C6gRJ4e.png" } },
  { key: "Eyes", image: { uri: "https://i.imgur.com/n1Yc1V1.png" } },
  { key: "Fingers", image: { uri: "https://i.imgur.com/ruinQ1F.png" } },
  { key: "Foot", image: { uri: "https://i.imgur.com/5vibVev.png" } },
  { key: "Head", image: { uri: "https://i.imgur.com/Mkbkt0j.png" } },
];

// Human body parts to learn
class BodyPart extends Component {
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

export default BodyPart;
