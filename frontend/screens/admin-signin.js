import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';
import Logout from './logout'
export default function Signin ({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('*****************************************')
        console.log(username + "   " + password)
        // fetch('http://127.0.0.1:5000/signin', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     })
        // }); 
        //for then---> alert

     
 var raw = JSON.stringify({"username":username,"password":password});
var requestOptions = {
  method: 'POST',
  body: raw ,
  headers: {
    "Content-Type": "application/json"
  },
  redirect: 'follow'
};


fetch("http://localhost:8000/auth/login/", requestOptions)
  .then(response => response.json())
  .then(result => {
        //this.props.setUser(results.data)
       
        if( result.token !== undefined){
            localStorage.setItem('token', result.token);
            navigation.navigate('Home')
        }
        
        console.log(result)})
  .catch(error => console.log('error', error));
        
        // setUsername('')
        // setPassword('')
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log('diss')
            }}
        >
            <View style={styles.container}>

                <Text style={styles.logo}>Kiddo</Text>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="username..."
                        onChangeText={text => setUsername(text)} />
                </View>

                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        onChangeText={text => setPassword(text)} />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                    <Text  style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <Logout />

            </View>

        </TouchableWithoutFeedback>
    );

}

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