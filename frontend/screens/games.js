import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button, Alert } from 'react-native';

export default function Games () {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{border:"5px solid black",marginLeft:"10vw",marginTop:"6vh", height:"25vh", width:"40vw"}}>
                <Image style={{height:"100%", width:"100%"}} source={{uri:"https://s3.amazonaws.com/scschoolfiles/621/design_img__m0yjw8.png"}} />
            </TouchableOpacity>
            <TouchableOpacity style={{border:"5px solid black",marginLeft:"10vw",marginTop:"6vh", height:"25vh", width:"40vw"}}>
                <Image style={{height:"100%", width:"100%"}} source={{uri:"https://s3.amazonaws.com/scschoolfiles/621/design_img__m0yjw8.png"}} />
            </TouchableOpacity>
            <TouchableOpacity style={{border:"5px solid black",marginLeft:"10vw",marginTop:"6vh", height:"25vh", width:"40vw"}}>
                <Image style={{height:"100%", width:"100%"}} source={{uri:"https://s3.amazonaws.com/scschoolfiles/621/design_img__m0yjw8.png"}} />
            </TouchableOpacity>
            <TouchableOpacity style={{border:"5px solid black",marginLeft:"10vw",marginTop:"6vh", height:"25vh", width:"40vw"}}>
                <Image style={{height:"100%", width:"100%"}} source={{uri:"https://s3.amazonaws.com/scschoolfiles/621/design_img__m0yjw8.png"}} />
            </TouchableOpacity>
            <TouchableOpacity style={{border:"5px solid black",marginLeft:"10vw",marginTop:"6vh", height:"25vh", width:"40vw"}}>
                <Image style={{height:"100%", width:"100%"}} source={{uri:"https://s3.amazonaws.com/scschoolfiles/621/design_img__m0yjw8.png"}} />
            </TouchableOpacity>
            <TouchableOpacity style={{border:"5px solid black",marginLeft:"10vw",marginTop:"6vh", height:"25vh", width:"40vw"}}>
                <Image style={{height:"100%", width:"100%"}} source={{uri:"https://s3.amazonaws.com/scschoolfiles/621/design_img__m0yjw8.png"}} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap'
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