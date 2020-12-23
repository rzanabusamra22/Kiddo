// frontend/src/screens/subScrees/Coloring.js
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  Alert,
  Button,
  Linking,
  FlatList,
  Keyboard,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import { sendcoloring } from "../redux/actions";
const wind = Dimensions.get("window");
var vw = wind.width * 0.01;
var vh = wind.height * 0.01;

// All the coloring games
class Coloring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
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
      "https://blackpearl2.ew.r.appspot.com/plays/?category=color",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          result,
        });
      });
  }
  save(item) {
    if (this.props.user) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
      var raw = JSON.stringify({
        user: this.props.user?.username,
        link: item.link,
        thumbnail: item?.thumbnail,
        kind: "Colorings",
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch("https://blackpearl2.ew.r.appspot.com/historys/", requestOptions)
        .then((response) => response.json())
        .then((result) => {})
        .catch((error) => console.error(error));
    }
  }
  save(item) {
    if (this.props.user) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");

      var raw = JSON.stringify({
        user: this.props.user?.username,
        link: item.link,
        thumbnail: item?.thumbnail,
        kind: "Color",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://blackpearl2.ew.r.appspot.com/historys/", requestOptions)
        .then((response) => response.json())
        .then((result) => {})
        .catch((error) => console.error(error));
    }
  }
  render() {
    const navigation = this.props.navigation;
    const sendcoloring = this.props.sendcoloring;
    const anygame = this.state.result;
    return (
      <FlatList
        data={anygame}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.save(item);
              sendcoloring(item.link);
              navigation.navigate("Colorings");
            }}
            style={{
              marginLeft: vw * 7,
              marginTop: 6 * vh,
              height: 25 * vh,
              width: 40 * vw,
            }}
          >
            <Image
              style={{ borderRadius: 15, height: "100%", width: "100%" }}
              source={{ uri: item?.thumbnail }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, i) => {
          return `${i}`;
        }}
        numColumns={2}
      />
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  img: {
    width: 120,
    height: 120,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "black",
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#dcdcdc",
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    borderColor: "black",
    backgroundColor: "pink",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
});

// Redux
const mapStateToProps = (state) => {
  return {
    coloringlink: state.coloringlink,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendcoloring: (z) => {
      dispatch(sendcoloring(z));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coloring);
