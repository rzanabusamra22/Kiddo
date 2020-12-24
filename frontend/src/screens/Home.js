// frontend/src/screens/Home.js
import $ from "jquery";
import { connect } from "react-redux";
import { senduser } from "./redux/actions";
import CategoryItem from "./category-item-card";
import React, { useState, Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";

// Home sweet Home!
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    $("body").append('<audio autoplay="autoplay" src=""></audio>');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    AsyncStorage.getItem("@user").then((user) => {
      fetch(`https://blackpearl2.ew.r.appspot.com/users/?username=${user}`, {
        headers: myHeaders,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          this.props.senduser(result[0]);
        })
        .catch(() => {});
    });
  }

  render() {
    const imgs = [
      { src: "https://imgur.com/6lgs8ZW.png", key: "1", nav: "Learn" },
      { src: "https://imgur.com/3Tddewk.png", key: "4", nav: "Art" },
      { src: "https://imgur.com/XtsLPGS.png", key: "3", nav: "Videolists" },
      { src: "https://imgur.com/nZ39fI6.png", key: "2", nav: "Album" },
      { src: "https://imgur.com/HF8KJbd.png", key: "5", nav: "Games" },
    ];

    const pressHandler = (x) => {
      this.props.navigation.navigate(x);
    };

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={imgs}
              renderItem={({ item }) => (
                <CategoryItem item={item} press={pressHandler} />
              )}
              numColumns={1}
              keyExtractor={(index, key) => {
                return `${key}`;
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: "red",
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: "#fff45e",
  },
});

// Redux
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    senduser: (z) => {
      dispatch(senduser(z));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
