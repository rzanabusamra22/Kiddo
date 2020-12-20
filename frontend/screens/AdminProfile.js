import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';


class AdminProfile extends Component{
    constructor(props) {
        super(props)
            this.state = {
                result: []
            }
        }

    render(){
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={{uri: this.props.user?.thumbnail}} style={styles.image} resizeMode="center"></Image>
                </View>
            </View>
            <View style={styles.infoContainer}>
<<<<<<< HEAD
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{this.props.user?.name}</Text>
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{this.props.user?.phone}</Text>
=======
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Name</Text>
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}> Panal</Text>
>>>>>>> 23ee8c2b72245a3719277977ee1df728ba15def6
            </View>
            <TouchableOpacity onPress={() => {this.props.props.navigation.navigate('parentProfile')}}>
            <Animated.View style={styles.button}>
                <Image source={{uri: 'https://i.imgur.com/6xtJi3t.png'}} style={{height:50,width:50}} resizeMode="center"></Image>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Edit</Text>
            </Animated.View>
            </TouchableOpacity>
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

// Redux
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);  
