// frontend/screens/Videos.js
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Keyboard,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
  Linking,
} from "react-native";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import { sendvideo } from "./redux/actions";
const wind = Dimensions.get("window");
var vw = wind.width * 0.01;
var vh = wind.height * 0.01;

// This component renders all the videos of one category clicked by the user
class Videos extends Component {
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
      `https://blackpearl2.ew.r.appspot.com/records/?category=${this.props.videocat}`,
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
        kind: "Video",
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
    const sendvideo = this.props.sendvideo;
    const videoctagory = this.state.result;
    return (
      <FlatList
        data={videoctagory}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.save(item);
              sendvideo(item.link);
              navigation.navigate("Video");
            }}
          >
            <Image
              style={{
                borderRadius: 40,
                marginBottom: 15,
                marginTop: 5,
                marginRight: 5,
                paddingBottom: 25 * vh,
                height: wind.width/3,
                width: wind.width/2
              }}
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
    videolink: state.videolink,
    user: state.user,
    videocat: state.videocat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendvideo: (z) => {
      dispatch(sendvideo(z));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
