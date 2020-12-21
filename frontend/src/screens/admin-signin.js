import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';

const [STORAGE_KEY] = '@save_token'
class Signin extends React.Component {
    constructor({navigation, frn}){
        super({navigation, frn});
        this.state = {
           username: '',
           password:'',
           flag:0
        }
    }
    
     handleSubmit = () => {
 var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});
var requestOptions = {
  method: 'POST',
  body: raw ,
  headers: {
    "Content-Type": "application/json"
  },
  redirect: 'follow'
};
fetch("https://blackpearl2.ew.r.appspot.com/jwt/", requestOptions)
  .then(response => response.json())
  .then( (result) => {
        if(result.token !== undefined){
          AsyncStorage.setItem('@token', result.token)
          .then(()=>{
           // location.reload();
           //this.setState({flag: 1})
            console.log(this.props.navigation)
            console.log('********** frn from admin-signin ', this.props.frn)
            //RestartAndroid.restart()
            //RNRestart.Restart();
           // this.props.navigation.push('Home');
            this.props.navigation.navigate('Home')
          })
          console.log('*******************||**||*********************')
          //  console.log(AsyncStorage.getItem('@token'))
          } 
            
        }  
        )
  .catch(error => console.log('error', error));
    }
    
    render(){
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log('disspacito')
            }}
        >
            <View style={styles.container}>

                <Text style={styles.logo}>Kiddo</Text>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="username..."
                        onChangeText={text => //setUsername(text)
                            this.setState({username: text})
                        } />
                </View>

                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        onChangeText={text => //setPassword(text)
                            this.setState({password: text})
                        } />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={this.handleSubmit}>
                    <Text  style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>

        </TouchableWithoutFeedback>
    );
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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

export default Signin
