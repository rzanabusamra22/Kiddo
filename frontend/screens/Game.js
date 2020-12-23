// frontend/screens/Game.js
import { connect } from "react-redux";
import { WebView } from "react-native-webview";
import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// This webview renders the selected game
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WebView
        source={{
          uri: this.props.gamelink,
        }}
      />
    );
  }
}

// Styles
const styles = StyleSheet.create({});

// Redux
const mapStateToProps = (state) => {
  return {
    gamelink: state.gamelink,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
