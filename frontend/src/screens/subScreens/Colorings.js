// frontend/src/screens/subScrees/Colorings.js
import { connect } from "react-redux";
import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// The coloring game to be played
class Colorings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <iframe src={this.props.coloringlink} width="100%" height="100%" />;
  }
}

// Styles
const styles = StyleSheet.create({});

// Redux
const mapStateToProps = (state) => {
  return {
    coloringlink: state.coloringlink,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Colorings);
