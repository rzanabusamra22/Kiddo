import React, { Component, useState } from 'react';
import { StyleSheet, Image, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button, Alert, Linking } from 'react-native';
import { Dimensions } from 'react-native';
const wind = Dimensions.get('window');
var vw = wind.width * 0.01
var vh = wind.height * 0.01
class Colors extends Component {
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
    <Text>
        Colors
        </Text>
    )
}}

const styles = StyleSheet.create({

})
export default Colors