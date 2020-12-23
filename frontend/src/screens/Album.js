// frontend/src/screens/Album.js
import React, { Component, useState } from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// This component will show a lot of photos in a nice viewing fashion; scrolling both ways horizontally & vertically
class Album extends Component {
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
    fetch("https://blackpearl2.ew.r.appspot.com/photos/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          result,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const arr1 = this.state.result.filter((photo, i) => {
      return photo.category === "sesamestreet";
    });
    const arr2 = this.state.result.filter((photo, i) => {
      return photo.category === "gumball";
    });
    const arr3 = this.state.result.filter((photo, i) => {
      return photo.category === "other";
    });
    const arr4 = this.state.result.filter((photo, i) => {
      return photo.category === "pokemon";
    });
    return (
      <ScrollView>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={arr1}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{ uri: item.link }}
                style={{
                  width: 260,
                  height: 300,
                  borderWidth: 1,
                  borderColor: "#F4511E",
                  resizeMode: "contain",
                  margin: 8,
                  borderRadius: 30,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          keyExtractor={(x, i) => {
            return `${i}`;
          }}
        />
        <FlatList
          horizontal
          data={arr2}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{ uri: item.link }}
                style={{
                  width: 260,
                  height: 300,
                  borderWidth: 1,
                  borderColor: "#F4511E",
                  resizeMode: "contain",
                  margin: 8,
                  borderRadius: 30,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          keyExtractor={(x, i) => {
            return `${i}`;
          }}
        />
        <FlatList
          horizontal
          data={arr3}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{ uri: item.link }}
                style={{
                  width: 260,
                  height: 300,
                  borderWidth: 1,
                  borderColor: "#F4511E",
                  resizeMode: "contain",
                  margin: 8,
                  borderRadius: 30,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          keyExtractor={(x, i) => {
            return `${i}`;
          }}
        />
        <FlatList
          horizontal
          data={arr4}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{ uri: item.link }}
                style={{
                  width: 260,
                  height: 300,
                  borderWidth: 1,
                  borderColor: "#F4511E",
                  resizeMode: "contain",
                  margin: 8,
                  borderRadius: 30,
                }}
              ></Image>
            </TouchableOpacity>
          )}
          keyExtractor={(x, i) => {
            return `${i}`;
          }}
        />
      </ScrollView>
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

export default Album;
