import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";

class parentProfile extends Component{
    constructor() {
        super()
        this.state = {
            result: []
        }
    }
    render(){
    return(
        <SafeAreaView style={styles.container}>
            {/* thank message */}
            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={{uri: "https://en.artpsy.pro/wp-content/uploads/2012/09/family.png"}} style={styles.image} resizeMode="center"></Image>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>ParentName</Text>
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Parent Panal</Text>
            </View>
            {/* to add a button :) */}
        </SafeAreaView>
    )
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginTop:50
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    }
});
export default parentProfile