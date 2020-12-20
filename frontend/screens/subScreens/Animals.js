import React, { Component} from 'react';
import { Image, StyleSheet, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from 'react-native';
//The array of values
const slides = [
  {key: "chicken",image: {uri: 'https://i.imgur.com/I9KTOXD.png'}, sound: "https://www.fesliyanstudios.com/play-mp3/6620"},
  {key: "cow",image: {uri: 'https://i.imgur.com/DxLuZ6L.png'},sound: "https://www.fesliyanstudios.com/play-mp3/6523"},
  {key: "duck",image: {uri: 'https://i.imgur.com/66YRBq0.png'},sound: "https://www.fesliyanstudios.com/play-mp3/6595"},
  {key: "horse",image: {uri: 'https://i.imgur.com/2cJG2FR.png'},sound: "https://www.fesliyanstudios.com/play-mp3/6595"},
  {key: "sheep",image: {uri: 'https://i.imgur.com/MeAefcJ.png'}, sound: "https://www.fesliyanstudios.com/play-mp3/6630"}
  ];
//the Slides functionality 
class Animals extends Component{
    constructor(){
        super()
        this.state={
        }
    }      
    _renderItem = ({ item }) => {
        return (
          <View style={styles.container}>
          <TouchableOpacity onPress={()=>{  }
          }>         
            <Image
              source={item.image}
              style={{
                height: 600,
                width: 400,
              }}
            />
          </TouchableOpacity>
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
