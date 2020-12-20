import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');

export default function CategoryItem({ item ,press }) {
    
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={()=>press(item.nav)}>
                <Image style={styles.img} source={{uri:item.src}} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 20
    },
    img: {
        width: win.width,
        height: win.width / 2.5,
    }
})