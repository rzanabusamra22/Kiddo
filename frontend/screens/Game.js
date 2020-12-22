import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview'
import { connect } from 'react-redux';
 class Game extends Component{
     constructor(props){
         super(props)
         this.state={
         }
     }

     render(){

    return(
        <WebView
        source={{
          uri:this.props.gamelink
        }}
/>
    )
}}

const styles = StyleSheet.create({
    
})
const mapStateToProps = (state) => {
    return {
       gamelink: state.gamelink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Game);  
