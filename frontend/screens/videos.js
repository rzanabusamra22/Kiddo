import React, { Component, useState } from 'react';
import { WebView } from 'react-native-webview'
import { StyleSheet, Image, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button, Alert,ScrollView, Linking } from 'react-native';
import { Dimensions } from 'react-native';
import { sendvideo } from './redux/actions';
import { connect } from 'react-redux';
const wind = Dimensions.get('window');
var vw = wind.width * 0.01
var vh = wind.height * 0.01
class Videos extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            result: [],
        }
    }
    componentDidMount() {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://blackpearl2.ew.r.appspot.com/records/", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    result
                })
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }
    // "https://emea.iframed.cn.dmti.cloud/content/1513/bottle-catch/game/uk/appleonionbottlecatch-100320-en.48316029/index.html?pageName=cn/apple-and-onion-bottle-catch&gametitle=Bottle Catch&server=web|www.cartoonnetworkhq.com&OnetrustActiveGroups=,req,pf,BG403,tdc,ven,ad,adv,BG405"
    render() {
       const navigation = this.props.navigation
       const sendvideo = this.props.sendvideo
        return (
            <View>
                <ScrollView style={styles.container}>
                {this.state.result.map(function (x, i) {
                    return (
                    
                        <TouchableOpacity onPress={() =>{ 
                             sendvideo(x.link);
                             navigation.navigate('Video')
                             }}  key={i} style={{ marginLeft: vw * 7, marginTop: 6 * vh, height: 25 * vh, width: 40 * vw }}>

                            <Image style={{ borderRadius: 15, height: "100%", width: "100%" }} source={{ uri: x?.thumbnail }} />
                        </TouchableOpacity>
                    
                    )
                })}

            </ScrollView>
            </View>
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
const mapStateToProps = (state) => {
    return {
       videolink: state.videolink,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      sendvideo: (z) => { dispatch(sendvideo(z)) },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Videos);  