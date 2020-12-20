import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
//The array of pictures
const slides = [
    {key: "carrot",image: {uri: 'https://i.imgur.com/65EKOtd.png'}},
    {key: "corn",image: {uri: 'https://i.imgur.com/ys9Jsjd.png'}},
    {key: "cucumber",image: {uri: 'https://i.imgur.com/msNkesb.png'}},
    {key: "onion",image: {uri: 'https://i.imgur.com/LzGvSy7.png'}},
    {key: "potato",image: {uri: 'https://i.imgur.com/qPME80P.png'}}
  ];
  //The functionality of the slide
class Vegatables extends Component{
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
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }
});
export default Vegatables