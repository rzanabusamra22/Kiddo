import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TextInput, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';

export default function Logout () {
 
    const handleSubmit = () => {
        console.log('*****************************************')
        localStorage.removeItem('token')
       // this.props.setUser({});

};

    

    return (
       
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoutBtn} onPress={handleSubmit}>
                    <Text  style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>


            </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    logoutBtn: {
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
    logoutText: {
        color: "black"
    }
});