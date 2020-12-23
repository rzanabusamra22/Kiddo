// frontend/screens/Profile.js

import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { senduser } from "./redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, { Easing } from "react-native-reanimated";
const win = Dimensions.get("window");
// This appears after a user successfully signs in

// This will render the user's profile interface and info
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }
  
  deleteAccount =()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
    myHeaders.append("Cookie", "csrftoken=i5EmzSQ98ekECN5CN1u5OJa2rY5dAgU9JNxpZGgxqOYR5YSu3YIpdHxMcptAHAmL");

    var raw = "";

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
 };
 console.log('************ user id : ',this.props.user.id)
fetch(`https://blackpearl2.ew.r.appspot.com/users/${this.props.user.id}/`, requestOptions)
  .then(response => response.text())
  .then(result => {
    AsyncStorage.removeItem("@user")
    AsyncStorage.removeItem("@token")
    this.props.senduser("");
    console.log(result)
    this.props.navigation.navigate('Home')})
  .catch(error => console.log('error', error));
  }
  componentDidMount() {
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
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={[
            styles.text,
            { fontWeight: "200", fontSize: 30, color: "#2b31ae" },
          ]}
        >
          Thank You For Trusting Us
        </Text>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{ uri: this.props.user?.thumbnail }}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text1, { fontWeight: "200", fontSize: 36 }]}>
            {this.props.user?.username}
          </Text>
          <Text style={[styles.text1, { color: "#AEB5BC", fontSize: 14 }]}>
            {this.props.user?.phone}
          </Text>
          <Text style={[styles.text1, { color: "#AEB5BC", fontSize: 14 }]}>
            {this.props.user?.email}
          </Text>
        </View>
        <TouchableOpacity>
          <Animated.View style={styles.button}>
            <Image
              source={{ uri: "https://i.imgur.com/6xtJi3t.png" }}
              style={{ height: 50, width: 50 }}
              resizeMode="center"
              onPress={() => {
                this.props.navigation.navigate("Edit");
              }}
            ></Image>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("History");
          }}
        >
          <View style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "200" }}>
              My Kid History
            </Text>
          </View>
        </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={this.deleteAccount}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Delete Account</Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    marginTop: 70,
    textAlign: "center",
    color: "#2b31ae",
  },
  text1: {
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: win.width / 2.5,
    width: win.width / 2.5,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 15,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    margin: win.width/20,
    marginTop: 16
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 75,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    marginTop: 20,
  },
  
});

// Redux
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    senduser: (z) => {
      dispatch(senduser(z));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);











