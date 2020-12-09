import React, { Component, useState } from 'react';
import { StyleSheet, Image, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button, Alert, Linking } from 'react-native';
import { Dimensions } from 'react-native';
const wind = Dimensions.get('window');
var vw = wind.width * 0.01
var vh = wind.height * 0.01
class BodyParts extends Component{
    constructor() {
        super()
        this.state = {
            result: []
        }
    }
    componentDidMount() {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://disco-nirvana-297409.oa.r.appspot.com/records/", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    result
                })
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }
    render() {
        return (
            <View style={styles.container}>
                {[...Array(6)].map(function (x, i) {
                    return (
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/embed/Jrg9KxGNeJY')} key={i} style={{ marginLeft: vw * 7, marginTop: 6 * vh, height: 25 * vh, width: 40 * vw }}>

                            <Image style={{ borderRadius: 15, height: "100%", width: "100%" }} source={{ uri: "https://pbs.twimg.com/media/D1eeNItVsAAIEQ4.jpg" }} />
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
export default BodyParts