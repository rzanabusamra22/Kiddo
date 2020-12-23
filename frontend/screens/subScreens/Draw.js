// frontend/screens/subScrees/Draw.js
import { connect } from 'react-redux';
import {WebView} from 'react-native-webview';
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

// This shows the drawing game selected to be played in webview
 class Draw extends Component{
     constructor(props){
         super(props)
         this.state={
         }
     }
     render(){
      
    return(
        <WebView
        source={{
          uri:this.props.drawlink
        }}
/>
    )
}}

// Styles
const styles = StyleSheet.create({
    
})

// Redux
const mapStateToProps = (state) => {
    return {
       drawlink: state.drawlink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Draw);  
