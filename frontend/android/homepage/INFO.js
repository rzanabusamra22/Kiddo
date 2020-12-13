///***  here the delete onclick and flatlist */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CategoryItem from './category-item-card'

// import star from './android/imgs/star'
//<Signin />
export default function Home() {
    const [categories, setCategories] = useState([
        { name: "Razan", key: '1' },
        { name: "Noor", key: '2' },
        { name: "Hamdallah", key: '3' },
        { name: "Dima", key: '4' }
    ]);

    const pressHandler = (key) => {
        setCategories((prevCategories) => {
            return prevCategories.filter(item => item.key != key)
        })
    }

    return (

        <View style={styles.container}>

            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={categories}
                        renderItem={({ item }) => (
                            <CategoryItem item={item} pressHandler={pressHandler} />
                        )}
                        numColumns={2}
                    />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
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

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://blackpearl2.ew.r.appspot.com/users/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));