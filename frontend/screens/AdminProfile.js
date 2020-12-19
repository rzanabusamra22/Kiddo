import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";

class AdminProfile extends Component{
    constructor() {
        super()
        this.state = {
            result: []
        }
    }
    render(){
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FMgEe33BwCdnfLO89QdJEYxWMgc9I982fw&usqp=CAU"}} style={styles.image} resizeMode="center"></Image>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>AdminName</Text>
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Admin Panal</Text>
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
export default AdminProfile