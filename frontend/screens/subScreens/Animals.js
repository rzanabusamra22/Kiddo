// frontend/screens/subScrees/Animals.js
import { TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image, StyleSheet, Text, View } from "react-native";
// import SoundPlayer from 'react-native-sound-player'
// var Sound = require('react-native-sound');

// Static variables in array to be rendered
const slides = [
  {
    key: "chicken",
    image: { uri: "https://i.imgur.com/I9KTOXD.png" },
    sound: "https://www.fesliyanstudios.com/play-mp3/6620",
  },
  {
    key: "cow",
    image: { uri: "https://i.imgur.com/DxLuZ6L.png" },
    sound: "https://www.fesliyanstudios.com/play-mp3/6523",
  },
  {
    key: "duck",
    image: { uri: "https://i.imgur.com/66YRBq0.png" },
    sound: "https://www.fesliyanstudios.com/play-mp3/6595",
  },
  {
    key: "horse",
    image: { uri: "https://i.imgur.com/2cJG2FR.png" },
    sound: "https://www.fesliyanstudios.com/play-mp3/6595",
  },
  {
    key: "sheep",
    image: { uri: "https://i.imgur.com/MeAefcJ.png" },
    sound: "https://www.fesliyanstudios.com/play-mp3/6630",
  },
];

// Animals pictures slides and their sounds
class Animals extends Component {
  constructor() {
    super();
    this.state = {};
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={item.image}
            style={{
              height: 600,
              width: 400,
            }}
          />
        </TouchableOpacity>
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

export default Animals;
