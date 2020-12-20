import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MusicApp from './index';

class Parent extends Component{
    constructor(props) {
    super(props)
    this.state = {
        isReady:false
    }
}

render() {
  return (
    <MusicApp props={this.props}/>
  );
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default Parent;
