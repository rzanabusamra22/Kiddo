import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
export default function CategoryItem({ item }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity >

                <Image style={styles.img} source={item.src} />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center"
    },
    img: {
        backgroundColor: 'blue',
        width: win.width / 2.5,
        height: win.width / 2,
        paddingLeft: 10,
        paddingRight: 10,
        //margin: win.width / 50
    }
})