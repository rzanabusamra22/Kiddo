import React from 'react';
import { StyleSheet, Image, View,  TouchableOpacity, Linking} from 'react-native';
export default function Alphabet(){
    return(
        <View style={styles.container}>
            {[...Array(6)].map(function (x, i) {
                return (
                    <TouchableOpacity onPress={() =>Linking.openURL('https://www.youtube.com/embed/Jrg9KxGNeJY')} key={i} style={{ marginLeft: vw * 7, marginTop: 6 * vh, height: 25 * vh, width: 40 * vw }}>

                        <Image style={{ borderRadius: 15, height: "100%", width: "100%" }} source={{ uri: "https://pbs.twimg.com/media/D1eeNItVsAAIEQ4.jpg" }} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    
})