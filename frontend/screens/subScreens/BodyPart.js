import React, { Component} from 'react';
import { Image, StyleSheet, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
//The array of pictures
const slides = [
    {key: "Ears",image: {uri: 'https://i.imgur.com/C6gRJ4e.png'}},
    {key: "Eyes",image: {uri: 'https://i.imgur.com/n1Yc1V1.png'}},
    {key: "Fingers",image: {uri: 'https://i.imgur.com/ruinQ1F.png'}},
    {key: "Foot",image: {uri: 'https://i.imgur.com/5vibVev.png'}},
    {key: "Head",image: {uri: 'https://i.imgur.com/Mkbkt0j.png'}}
  ];
  //The Slides functionality 
class BodyParts extends Component{
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
export default BodyParts