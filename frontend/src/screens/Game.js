// frontend/src/screens/Game.js
import { connect } from "react-redux";
import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// This iframe renders the selected game
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <iframe src={this.props.gamelink} width="100%" height="100%" />;
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
