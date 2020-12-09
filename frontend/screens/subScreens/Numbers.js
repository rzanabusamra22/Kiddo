import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
const slides = [
    {key: "one",image: require("../assests/pictures/1.PNG")},
    {key: "two",image: require("../assests/pictures/2.PNG")},
    {key: "three",image: require("../assests/pictures/3.PNG")},
    {key: "four",image: require("../assests/pictures/4.PNG")},
    {key: "five",image: require("../assests/pictures/5.PNG")},
    {key: "six",image: require("../assests/pictures/6.PNG")},
    {key: "seven",image: require("../assests/pictures/7.PNG")},
    {key: "eight",image: require("../assests/pictures/8.PNG")},
    {key: "nine",image: require("../assests/pictures/9.PNG")},
    {key: "ten",image: require("../assests/pictures/10.PNG")},
  ];
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
                // marginTop:20,
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
export default Numbers


































// import React, { Component, useState } from 'react';
// import { StyleSheet, Image, Text, View} from 'react-native';
// class Numbers extends Component{
//     constructor(){
//         super()
//         this.state={

//         }
//     }
//     render (){
//     return (
//       <View>
//           <Image
//           {require("../assests/pictures/1.PNG")} />
//       </View>
//     );
// }}
// const styles = StyleSheet.create({

// });
// export default Numbers