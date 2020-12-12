import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Drawing extends Component{
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
    return(
        <Text>
            Drawing
        </Text>
    )
}}

const styles = StyleSheet.create({
    
})


export default Drawing