import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CategoryItem from './category-item-card'

// import star from './android/imgs/star'
//<Signin />



export default function Home() {
    const [imgs, setImg] = useState([
        { src: require('./assests/pictures/learn-card-blue.png'), key: 1 },
        { src: require('./assests/pictures/art-card-green.png'), key: 4 },
        { src: require('./assests/pictures/videos-card-blue.png'), key: 3 },
        { src: require('./assests/pictures/albums-card-green.png'), key: 2 },
        { src: require('./assests/pictures/games-card-orange.png'), key: 5 },
    ])
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={imgs}
                        renderItem={({ item }) => (
                            <CategoryItem item={item} />
                        )}
                        numColumns={1}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: 'blue',
    },
    content: {

        backgroundColor: 'red',
        flex: 1
    },
    list: {
        flex: 1,
        backgroundColor: '#F0BF00'
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