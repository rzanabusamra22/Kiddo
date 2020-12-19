// frontend/screens/history.js
// import
import { StyleSheet, Image, Text, View, Keyboard, TextInput,FlatList, TouchableWithoutFeedback, TouchableOpacity, Button, Alert,ScrollView, Linking } from 'react-native';
import React, { Component, useState } from 'react';
import { sendvideo, sendgame } from '../redux/actions';
import { connect } from 'react-redux';

class History extends Component {
    constructor(props) {
        super(props)
            this.state = {
                result: [],
            }}

    componentDidMount() {

    // fetch the history for the current user
    var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
        myHeaders.append("Cookie", "csrftoken=8D1Sq0vmt6e688rpIH6GYE3e7UPibIdjv3Adw5y7f0n4juVJLHgL6MBl0QdGYamu");
        myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers:myHeaders
    };

    fetch(`https://blackpearl2.ew.r.appspot.com/historys/?user=${this.props.user.username}&kind=`, requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({result})})
        .catch(error => console.log('error', error));

    }

    go(x){

        // when clicking on a history item visits the page again
       if(x.kind==="video"){sendvideo(item.link);this.props.navigation.navigate(x.kind)}
       else{sendgame(item.link);this.props.navigation.navigate(x.kind)}

    }

    render() {
        return(
            <View style={styles.mainContainer}>
             <SafeAreaView >
                <ScrollView >
                {this.state.result.map((x,i)=>{
                        return (
                        <TouchableOpacity onPress={(x)=>go(x)} key={i}>
                        <View style={styles.container}>
                        <Image 
                         source={x.thumbnail}
                         style={{ width: 200, height: 180 }}
                         />
                         <Text>{x.kind}</Text>
                         </View>
                         </TouchableOpacity>  
                        )
                })}
                </ScrollView>
             </SafeAreaView>
            </View>
    )}
}

// react native styles
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
        user: state.user,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      sendgame: (z) => { dispatch(sendgame(z)) },
      sendvideo: (z) => { dispatch(sendvideo(z)) },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(History);  
