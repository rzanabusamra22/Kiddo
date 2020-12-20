import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
//The array of pictures
const slides = [
    {key: "blue",image: {uri: 'https://i.imgur.com/Ep7evnj.png'}},
    {key: "green",image: {uri: 'https://i.imgur.com/xLQtVUv.png'}},
    {key: "red",image: {uri: 'https://i.imgur.com/aGmwdPW.png'}},
    {key: "black",image: {uri: 'https://i.imgur.com/PlGSddL.png'}},
    {key: "yellow",image: {uri: 'https://i.imgur.com/pVY2D1N.png'}}
  ];
class Colors extends Component{
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
export default Colors