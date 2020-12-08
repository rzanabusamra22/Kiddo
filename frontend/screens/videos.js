import React, { Component, useState } from 'react';
import { StyleSheet, Image, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button, Alert } from 'react-native';
class Videos extends Component{
    constructor(){
        super()
        this.state={
            result : []
        }
    }
    componentDidMount() {
      

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

fetch("http://127.0.0.1:8000/records/", requestOptions)
  .then(response => response.json())
  .then(result =>{
  this.setState({
      result
  })
  console.log(result)})
  .catch(error => console.log('error', error));
    }

    render (){
    return (
        <View style={styles.container}>
           
        
       
          <Image source={{uri:this.state.result[0]?.thumbnail}} style={styles.img}/>
        
        </View>
    );
}}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    img: {
        width:120,
        height:120
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "black",
        marginBottom: 40
    },
    inputView: {
        backgroundColor: "#dcdcdc",
        width: "80%",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "black",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        borderColor: 'black',
        backgroundColor: 'pink',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "black"
    }
});
export default Videos