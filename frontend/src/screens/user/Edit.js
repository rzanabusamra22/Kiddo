// frontend/src/screens/user/Edit.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  Alert,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { senduser } from "../redux/actions";

// Responsible for updating existed
const Update = (props) => {
  const [parentname, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");
  const [picture, onChangePicture] = useState("");
  const [phone, onChangePhone] = useState("");
  const [email, onChangeEmail] = useState("");
  const submitEditions = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");

    var raw = {};
    if (parentname !== "") {
      raw.username = parentname;
    }
    if (email !== "") {
      raw.email = email;
    }
    if (password === "") {
      alert(
        "Required",
        "Password can't be empty ",
        [{ text: "Ok", onPress: () => {} }],
        { cancelable: true }
      );
    }
    if (password !== "") {
      raw.password = password;
    }

    if (picture !== "") {
      raw.thumbnail = picture;
    }
    if (phone !== "") {
      raw.phone = phone;
    }

    raw = JSON.stringify(raw);
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `https://blackpearl2.ew.r.appspot.com/users/${props.user.id}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        var signup_error_msg = "";
        if (Array.isArray(result.username)) {
          signup_error_msg += "\n" + result.username;
        }
        if (Array.isArray(result.email)) {
          signup_error_msg += "\n" + result.email;
        }
        if (Array.isArray(result.password)) {
          signup_error_msg += "\n" + result.password;
        }

        if (signup_error_msg === "") {
          props.senduser(result);

          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            username: result.username,
            password: password,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch("https://blackpearl2.ew.r.appspot.com/jwt/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              if (result.token !== undefined) {
                AsyncStorage.setItem("@token", result.token);
                AsyncStorage.setItem("@user", username);
              }
            });

          alert(
            "Account info editing",
            "Successfully edited",
            [
              {
                text: "OK",
                onPress: () => {
                  props.navigation.navigate("Home");
                },
              },
            ],
            { cancelable: true }
          );
        } else {
          alert(
            "Account info editing",
            "Editing Failed " + "\n" + signup_error_msg,
            [
              { text: "Try again", onPress: () => {} },
              {
                text: "CANCEL",
                onPress: () => {
                  props.navigation.navigate("Home");
                },
              },
            ],
            { cancelable: true }
          );
        }
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Parents SignUp",
          "Failed signed up",
          [
            { text: "Try again", onPress: () => {} },
            { text: "OK", onPress: () => {} },
          ],
          { cancelable: false }
        );
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.logo1}>Update Account Info</Text>
        <TextInput
          value={picture}
          name="Picture"
          placeholder="Profile Picture"
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangePicture(text)}
        ></TextInput>
        <TextInput
          value={parentname}
          name="parentname"
          placeholder="Name"
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangeName(text)}
        ></TextInput>
        <TextInput
          value={email}
          name="Email"
          keyboardType="email-address"
          placeholder="Email"
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangeEmail(text)}
        ></TextInput>
        <TextInput
          value={password}
          name="Password"
          placeholder="Password"
          secureTextEntry={false}
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangePassword(text)}
        ></TextInput>
        <TextInput
          value={phone}
          name="Phone"
          keyboardType="phone-pad"
          placeholder="Phone Number"
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangePhone(text)}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={submitEditions}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo1: {
    fontWeight: "200",
    fontSize: 30,
    color: "black",
    marginBottom: 10,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 50,
    width: 350,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  button: {
    backgroundColor: "white",
    height: 70,
    width: 350,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
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

export default connect(mapStateToProps, mapDispatchToProps)(Update);
