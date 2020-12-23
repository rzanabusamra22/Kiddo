// frontend/src/screens/Video.js
import { connect } from "react-redux";
import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// This iframe plays the selected video to be watched
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <iframe src={this.props.videolink} />;
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vid: {
    width: 500,
    height: 500,
  },
});

// Redux
const mapStateToProps = (state) => {
  return {
    videolink: state.videolink,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
