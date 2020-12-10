import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
const slides = [
    {key: "chicken",image: {uri: 'https://i.imgur.com/I9KTOXD.png'}},
    {key: "cow",image: {uri: 'https://i.imgur.com/DxLuZ6L.png'}},
    {key: "duck",image: {uri: 'https://i.imgur.com/66YRBq0.png'}},
    {key: "horse",image: {uri: 'https://i.imgur.com/2cJG2FR.png'}},
    {key: "sheep",image: {uri: 'https://i.imgur.com/MeAefcJ.png'}}
  ];
class Animals extends Component{
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
export default Animals
