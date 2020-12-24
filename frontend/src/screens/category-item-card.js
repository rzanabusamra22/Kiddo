// frontend/src/screens/category-item-card.js
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
const win = Dimensions.get("window");

// This displays pictures
export default function CategoryItem({ item, press }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => press(item.nav)}>
        <Image style={styles.img} source={{ uri: item.src }} />
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  img: {
    width: win.width,
    height: win.width / 2.5,
  },
});
