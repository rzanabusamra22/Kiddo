import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Signin from './screens/admin-signin'
import Home from './android/homepage/home-comp'
import Games from './screens/games'
import Videos from './screens/videos'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
// import star from './android/imgs/star'
// <Home />
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="kids">
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>      
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
  