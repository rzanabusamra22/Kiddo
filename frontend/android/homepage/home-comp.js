import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CategoryItem from './category-item-card'

// import star from './android/imgs/star'
//<Signin />



export default function Home() {
    const [imgs, setImg] = useState([
        { src: require('../imgs/game.png'), key: 1 },
        { src: require('../imgs/videos-patrick.png'), key: 2 },
        { src: require('../imgs/pics-albums-picka.jpg'), key: 3 },
        { src: require('../imgs/learning-dora.png'), key: 4 },
    ])
    return (
        <View style={styles.container}>

            <FlatList
                data={imgs}
                renderItem={({ item }) => (
                    <CategoryItem item={item} />
                )}
                numColumns={1}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    }
});



// <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {/* <TouchableOpacity onPress={() => console.log('clicked')}>
    //     <Image source={star} />
    //   </TouchableOpacity> */}
    //   <StatusBar style="auto" />
    // </View>

/*
<FlatList
    data={array}
    renderItem = {({item}) =>(
      <Text>{item.text}</Text>
    )}
/>



*/