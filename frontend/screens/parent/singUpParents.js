import AsyncStorage from '@react-native-community/async-storage';
import React, { Component, useState } from 'react';
import {Alert, View, Text, StyleSheet, Image, Dimensions,TextInput ,TouchableOpacity} from 'react-native';


const SignUp =({navigation})=>{
    
  const [parentname, onChangeName] = useState('')
  const [password, onChangePassword] = useState('');
  const [picture, onChangePicture] = useState('');
  const [phone, onChangePhone] = useState('')
  const [email, onChangeEmail] = useState('')

  

const submitSignup = ()=>{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");

var raw = JSON.stringify({
  "username":parentname,
  "password":password,
  "email":email,
  "thumbnail": picture,
  "phone": parseInt(phone)
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://blackpearl2.ew.r.appspot.com/signup/", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    var signup_error_msg = '' 
    if(Array.isArray(result.username)){
      signup_error_msg +=  '\n' + result.username 
      console.log('first stage: ', signup_error_msg)
    }
    if(Array.isArray(result.email)){
      signup_error_msg +=  '\n' + result.email 
      console.log('second stage: ', signup_error_msg)
    }
    if(Array.isArray(result.password)){
      signup_error_msg += '\n' +  result.password 
      console.log('third stage : ', signup_error_msg)
    }
    if(signup_error_msg === '' ){
    Alert.alert(
      "Parents SignUp",
      "Successfully signed up",
      [
        { text: "OK", onPress: () =>{ console.log("OK Pressed") 
        
        navigation.navigate('Home')
      }}
      ],
      { cancelable: true}
    );
    
  
  }
    else{
      Alert.alert(
        "Parents SignUp",
        "Signed up Failed " +'\n'+  signup_error_msg ,
        [ 
           { text: "Try again", onPress: () => {
          console.log("Try again Pressed")} },
          { text: "CANCEL", onPress: () =>{ console.log("cancel Pressed")
        navigation.navigate('Home')
        } }
        ],
        { cancelable: true }
      );
    }
  })
  .catch(error => {console.log('error', error)
   
    Alert.alert(
      "Parents SignUp",
      "Failed signed up",
      [  
        { text: "Try again", onPress: () => {
        console.log("Try again Pressed")} },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
});
}


      return (
        <View style={styles.container}>
          <Text style={styles.logo1}>
              Kiddo Parents               
          </Text>
          <TextInput value={parentname} name="parentname" placeholder='Name'style={styles.textInput} placeholderTextColor='black' onChangeText={text => onChangeName(text)}
                        ></TextInput>
          <TextInput value={email} name="email" placeholder='Email'style={styles.textInput} placeholderTextColor='black' onChangeText={text => onChangeEmail(text)}></TextInput>
          <TextInput value={password} name="password" placeholder='Password'style={styles.textInput} placeholderTextColor='black' onChangeText={text => onChangePassword(text)}></TextInput>
          <TextInput value={phone} name="phone" placeholder='Phone Number'style={styles.textInput} placeholderTextColor='black' onChangeText={text => onChangePhone(text)}></TextInput>
          <TextInput value={picture} name="picture" placeholder='Profile Picture'style={styles.textInput} placeholderTextColor='black' onChangeText={text => onChangePicture(text)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={submitSignup}>
            <Text style={{fontSize:20,fontWeight:'bold'}} >SIGN UP</Text>
          </TouchableOpacity>
        </View>
      )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo1: {
      fontWeight: "bold",
      fontSize: 30,
      color: "black",
      marginBottom: 10
    },
    text:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInput:{
      height:50,
      width:350,
      borderRadius:25,
      borderWidth:0.5,
      marginHorizontal:20,
      paddingLeft:10,
      marginVertical:5,
      borderColor:'rgba(0,0,0,0.2)'
    },
    button: {
      backgroundColor: 'white',
      height: 70,
      width:350,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      shadowOffset:{width:2,height:2},
      shadowColor:'black',
      shadowOpacity:0.2
   }
  });
export default SignUp