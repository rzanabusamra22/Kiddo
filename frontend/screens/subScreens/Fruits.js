import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
const slides = [
  {key: "apple",image: {uri: 'https://i.imgur.com/wsoPVEv.png'}},
  {key: "banana",image: {uri: 'https://i.imgur.com/BvhbhNN.png'}},
  {key: "grapes",image: {uri: 'https://i.imgur.com/mWakr8I.png'}},
  {key: "mango",image: {uri: 'https://i.imgur.com/1QxBVgk.png'}},
  {key: "orange",image: {uri: 'https://i.imgur.com/2DLs5lr.png'}}
  ];
class Fruits extends Component{
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
export default Fruits