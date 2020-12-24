// frontend/src/screens/subScrees/Numbers.js
import React, { Component, useState } from 'react';
import AppIntroSlider from "react-native-app-intro-slider";
import { Image, StyleSheet, Text, View } from "react-native";

// Static values container
const slides = [
    {key: "one",image: {uri: 'https://i.imgur.com/N6AqfnY.png'}},
    {key: "two",image: {uri: 'https://i.imgur.com/hV0OYM5.png'}},
    {key: "three",image: {uri: 'https://i.imgur.com/crlJyCy.png'}},
    {key: "four",image: {uri: 'https://i.imgur.com/RlRnjZb.png'}},
    {key: "five",image: {uri: 'https://i.imgur.com/p1PKdcl.png'}},
    {key: "six",image: {uri: 'https://i.imgur.com/V3aCy5Z.png'}},
    {key: "seven",image: {uri: 'https://i.imgur.com/XlOO2oJ.png'}},
    {key: "eight",image: {uri: 'https://i.imgur.com/xf82Wb3.png'}},
    {key: "nine",image: {uri: 'https://i.imgur.com/Nxbwd4E.png'}},
    {key: "ten",image: {uri: 'https://i.imgur.com/EpyMsS0.png'}},
  ];

// Shows the basic numbers to learn them
class Numbers extends Component{
    constructor(){
        super()
        this.state={
        }
    }
    _renderItem = ({ item }) => {
        return (
          <View style={styles.container}>
            <Image
              source={item.image}
              style={{
                height: 600,
                width: 400,
              }}
            />
          </View>
        );
      };
    render (){
          return (
          <AppIntroSlider
            renderItem={this._renderItem} 
            data={slides} 
           />
          );
}}

// Styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }
});

export default Numbers





























