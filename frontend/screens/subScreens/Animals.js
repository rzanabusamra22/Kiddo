// frontend/screens/subScrees/Animals.js
import { TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image, StyleSheet, Text, View } from "react-native";
// import SoundPlayer from 'react-native-sound-player'
// var Sound = require('react-native-sound');

// Animals pictures slides and their sounds
class Animals extends Component {
  constructor() {
    super();
    this.state = { result: [] };
  }

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      "https://blackpearl2.ew.r.appspot.com/photos/?category=animal",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          result,
        });
      })
      .catch((error) => console.error(error));
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{ uri: item.link }}
            style={{
              height: 600,
              width: 600,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider renderItem={this._renderItem} data={this.state.result} />
    );
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
