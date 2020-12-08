import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList,Button } from 'react-native';
import CategoryItem from './category-item-card'


export default function Home({ navigation }) {
    //navigation or props without {}
    const [imgs, setImg] = useState([
        { src: require('./assests/pictures/learn-card-blue.png'), key: 1 ,nav:"Learn"},
        { src: require('./assests/pictures/art-card-green.png'), key: 4 ,nav:"Art"},
        { src: require('./assests/pictures/videos-card-blue.png'), key: 3 ,nav:"Videos"},
        { src: require('./assests/pictures/albums-card-green.png'), key: 2 ,nav:"Album"},
        { src: require('./assests/pictures/games-card-orange.png'), key: 5 ,nav:"Games"},
    ])
    const pressHandler = (x) => {
        navigation.navigate(x)
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={imgs}
                        renderItem={({ item }) => (
                            <CategoryItem item={item}  press={pressHandler}/> 
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
        // paddingTop: 10,
        // backgroundColor: 'blue',
    },
    content: {
        backgroundColor: 'red',
        flex: 1
    },
    list: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
