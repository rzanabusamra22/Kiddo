import React, { Component, useState } from 'react';
import { WebView } from 'react-native-webview'
import { StyleSheet, Image, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, FlatList, TouchableOpacity, ScrollView, Button, Alert, Linking } from 'react-native';
import { Dimensions } from 'react-native';
import { sendgame } from './redux/actions';
import { connect } from 'react-redux';
const wind = Dimensions.get('window');
var vw = wind.width * 0.01
var vh = wind.height * 0.01
class Album extends Component {
    constructor(props) {

        super(props)
        this.state = {
            result: [],
        }
    }
    componentDidMount() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        fetch("https://blackpearl2.ew.r.appspot.com/photos/", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    result
                })
            })
            .catch(error => console.error(error));
    }

    
    
    render() {
        
        const navigation = this.props.navigation
        const sendgame = this.props.sendgame
        const anygame = this.state.result
        const list=[
            { pic: { uri: 'https://media.discordapp.net/attachments/375335164651372565/772892783819489340/unknown.png?width=840&height=473' } },
            { pic: { uri: 'https://media.discordapp.net/attachments/375335164651372565/723825947425505340/unknown.png?width=540&height=473' } },
            { pic: { uri: "data:image/jpeg;base64,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" }} ,
            { pic: { uri: "https://i.kym-cdn.com/photos/images/original/001/923/521/4fb.jpeg" }}
        ]
        return (
            <ScrollView>
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={list}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Image source={item.pic} style={{
                                width: 260,
                                height: 300,
                                borderWidth: 5,
                                borderColor: '#F4511E',
                                resizeMode: 'contain',
                                margin: 8
                            }}></Image>
                        </TouchableOpacity>
                        
                    )}
                    
                    keyExtractor={(x,i)=>{return `${i}`}}
                />
                <FlatList
                    horizontal
                    data={list}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Image source={item.pic} style={{
                                width: 260,
                                height: 300,
                                borderWidth: 5,
                                borderColor: '#d35647',
                                resizeMode: 'contain',
                                margin: 8
                            }}></Image>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(x,i)=>{return `${i}`}}
                />
                <FlatList
                    horizontal
                    data={list}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Image source={item.pic} style={{
                                width: 260,
                                height: 300,
                                borderWidth: 5,
                                borderColor: '#d35647',
                                resizeMode: 'contain',
                                margin: 8
                            }}></Image>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(x,i)=>{return `${i}`}}
                />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    img: {
        width: 120,
        height: 120
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

// Redux

export default Album