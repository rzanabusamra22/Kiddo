import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'
// Home Screen Categories
import Home from './screens/home-comp'
import Learn from './screens/learn';
import Art from './screens/art';
import Videos from './screens/videos';
import Album from './screens/Album';
import Games from './screens/games';
// Learn Catagories 
import Alphabet from './screens/subScreens/Alphabet'
import Numbers from './screens/subScreens/Numbers';
import BodyPart from './screens/subScreens/BodyPart';
import Fruits from './screens/subScreens/Fruits';
import Vegatables from './screens/subScreens/Vegatables';
import Colors from './screens/subScreens/Colors';
import Animals from './screens/subScreens/Animals';
//Art Catagories 
import Coloring from './screens/subScreens/coloring.js';
import Drawing from './screens/subScreens/Drawing';
//Drawer Pages
import Signin from './screens/admin-signin'
//Navigation
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const SignInstack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>{
  return(
    <HomeStack.Navigator 
 initialRouteName="Home"
 screenOptions={{
   headerStyle: {
     backgroundColor: '#f4511e',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
     fontWeight: 'bold',
   },
 }}
 >
  <HomeStack.Screen
     name="Home"
     component={Home}
     options={{ 
       title: 'Home',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
    }}
 />
    <HomeStack.Screen name="Learn" component={Learn} />
    <HomeStack.Screen name="Art" component={Art} />
    <HomeStack.Screen name="Videos" component={Videos} />
    <HomeStack.Screen name="Album" component={Album} />
    <HomeStack.Screen name="Games" component={Games} />
    {/* Learn Catagories  */}
     <HomeStack.Screen name="Alphabet" component={Alphabet} />
     <HomeStack.Screen name="Numbers" component={Numbers} />
     <HomeStack.Screen name="BodyPart" component={BodyPart} />
     <HomeStack.Screen name="Fruits" component={Fruits} />
     <HomeStack.Screen name="Vegatables" component={Vegatables} />
     <HomeStack.Screen name="Colors" component={Colors} />
     <HomeStack.Screen name="Animals" component={Animals} />
     {/* Art Catagories  */}
     <HomeStack.Screen name="Coloring" component={Coloring} />
     <HomeStack.Screen name="Drawing" component={Drawing} />
    </HomeStack.Navigator>
  )
}
const SignInStackScreen = ({navigation}) =>{
  return(
    <SignInstack.Navigator 
  initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <SignInstack.Screen
     name="Signin"
     component={Signin}
     options={{ 
       title: 'Signin',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
    }}
 />
    </SignInstack.Navigator>
  )
}

export default function App() {
  return (
     <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStackScreen">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  ); 
}

//  {/* Home Screen Categories */}
//  <Stack.Navigator 
//  initialRouteName="Home"
//  screenOptions={{
//    headerStyle: {
//      backgroundColor: '#f4511e',
//    },
//    headerTintColor: '#fff',
//    headerTitleStyle: {
//      fontWeight: 'bold',
//    },
//  }}
//  >
//  <Stack.Screen
//      name="Home"
//      component={Home}
//      options={{ title: 'Home' }}
//  />
//     <Stack.Screen name="Learn" component={Learn} />
//     <Stack.Screen name="Art" component={Art} />
//     <Stack.Screen name="Videos" component={Videos} />
//     <Stack.Screen name="Album" component={Album} />
//     <Stack.Screen name="Games" component={Games} />
//     {/* Learn Catagories  */}
//     <Stack.Screen name="Alphabet" component={Alphabet} />
//     <Stack.Screen name="Numbers" component={Numbers} />
//     <Stack.Screen name="BodyPart" component={BodyPart} />
//     <Stack.Screen name="Fruits" component={Fruits} />
//     <Stack.Screen name="Vegatables" component={Vegatables} />
//     <Stack.Screen name="Colors" component={Colors} />
//     <Stack.Screen name="Animals" component={Animals} />
//     {/* Art Catagories  */}
//     <Stack.Screen name="Coloring" component={Coloring} />
//     <Stack.Screen name="Drawing" component={Drawing} />
// </Stack.Navigator>