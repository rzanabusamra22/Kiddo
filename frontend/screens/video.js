import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview'
export default function Videos(){
    return(
        <WebView
        source={{
          uri:
            "https://www.youtube.com/embed/A6cgQDyvEzc"
        }}
/>
    )
}

const styles = StyleSheet.create({
    
})