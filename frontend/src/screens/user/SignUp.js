// frontend/src/screens/user/SignUp.js
import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  Keyboard,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { senduser } from "../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Responsible for creating new accounts
const SignUp = (props) => {
  const [parentname, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");
  const [picture, onChangePicture] = useState("");
  const [phone, onChangePhone] = useState("");
  const [email, onChangeEmail] = useState("");
  const submitSignup = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: parentname,
      password: password,
      email: email,
      thumbnail: picture,
      phone: parseInt(phone),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://blackpearl2.ew.r.appspot.com/signup/", requestOptions)
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
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          var raw = JSON.stringify({
            username: parentname,
            password: password,
          });
          props.senduser(result);
          var requestOptions = {
            method: "POST",
            body: raw,
            redirect: "follow",
            headers: myHeaders,
          };

          fetch("https://blackpearl2.ew.r.appspot.com/jwt/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              if (result.token !== undefined) {
                AsyncStorage.setItem("@token", result.token).then(() => {
                  AsyncStorage.setItem("@user", parentname).then(() => {
                    alert("Successfully signed up");
                    location.reload();
                  });
                });
              } else {
                alert("Signed up Failed " + "\n" + signup_error_msg);
              }
            })
            .catch((error) => {
              console.error(error);
              alert("Failed signed up");
            });
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed signed up");
      });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.logo1}>Kiddo Parents</Text>

        <TextInput
          value={parentname}
          name="parentname"
          placeholder="Name"
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangeName(text)}
        ></TextInput>
        <TextInput
          value={password}
          name="Password"
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangePassword(text)}
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
          value={picture}
          name="Picture"
          placeholder="Profile Picture"
          style={styles.textInput}
          placeholderTextColor="black"
          onChangeText={(text) => onChangePicture(text)}
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
        <TouchableOpacity style={styles.button} onPress={submitSignup}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN UP</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
