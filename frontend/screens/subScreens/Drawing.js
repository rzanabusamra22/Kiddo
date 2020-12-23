// frontend/screens/subScrees/Drawing.js
import React, { Component, useState } from "react";
import {
  Text,
  View,
  Alert,
  Image,
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
import { senddraw } from "../redux/actions";
const wind = Dimensions.get("window");
var vw = wind.width * 0.01;
var vh = wind.height * 0.01;

// Shows a list of all the drawing applications
class Drawing extends Component {
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
      `https://blackpearl2.ew.r.appspot.com/plays/?category=draw`,
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
        kind: "Draw",
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
    const senddraw = this.props.senddraw;
    const anygame = this.state.result;
    return (
      <FlatList
        data={anygame}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              senddraw(item.link);
              navigation.navigate("draw");
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
    drawlink: state.drawlink,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    senddraw: (z) => {
      dispatch(senddraw(z));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawing);
