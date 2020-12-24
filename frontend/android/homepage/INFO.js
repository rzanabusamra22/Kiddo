///***  here the delete onclick and flatlist */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import CategoryItem from './category-item-card'

// import star from './android/imgs/star'
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
