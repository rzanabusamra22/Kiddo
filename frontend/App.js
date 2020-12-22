import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
//redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './screens/redux/reducers.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const store = createStore(rootReducer);
// Home Screen Categories
import Home from './screens/home-comp'
import Learn from './screens/learn';
import Art from './screens/art';
import Videolists from './screens/videolists';
import Videos from './screens/videos';
import Video from './screens/video';
import Game from './screens/game';
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
import ColoringS from './screens/subScreens/coloringS';
import Drawing from './screens/subScreens/Drawing';
import Draw from './screens/subScreens/draw';
//Drawer Pages
import Signin from './screens/admin-signin';
import Donate from './screens/donate';
import AdminProfile from './screens/AdminProfile';
//Admin Signed In
import DrawerContent from './screens/DrawerContent';
//Parent
import Parent from './screens/parent/parents-landingpage'
import SignUp from './screens/parent/signUpParents'
import MusicApp from './screens/parent/index'
import parentProfile from './screens/parent/parentProfile'
import History from './screens/history'
//Navigation
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SignInstack = createStackNavigator();
const Donatestack = createStackNavigator();
const AdminProfilestack = createStackNavigator();
const ParentStack = createStackNavigator();
const Historystack = createStackNavigator();
//Home Stack 
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
       title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
    }}
 />
    <HomeStack.Screen 
    name="Learn" 
    component={Learn} 
    options={{ 
       title: 'Kiddo',
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
    }}/>
    <HomeStack.Screen 
    name="Art" 
    component={Art} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Video" 
    component={Video} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
   <HomeStack.Screen 
    name="Videolists" 
    component={Videolists} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Videos" 
    component={Videos} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Album" 
    component={Album} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Games" 
    component={Games} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    <HomeStack.Screen 
    name="Game" 
    component={Game} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
    {/* Learn Catagories  */}
     <HomeStack.Screen 
     name="Alphabet" 
     component={Alphabet} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Numbers" 
     component={Numbers} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="BodyPart" 
     component={BodyPart} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Fruits" 
     component={Fruits} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Vegatables" 
     component={Vegatables} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Colors" 
     component={Colors}  options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     <HomeStack.Screen 
     name="Animals" 
     component={Animals} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
     {/* Art Catagories  */}
     <HomeStack.Screen 
     name="Coloring" 
     component={Coloring}  
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
   <HomeStack.Screen 
    name="coloringS" 
    component={ColoringS} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
     <HomeStack.Screen 
     name="Drawing" 
     component={Drawing} 
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>
   <HomeStack.Screen 
    name="draw" 
    component={Draw} 
    options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>),
   }}/>
    </HomeStack.Navigator>
  )
}
//SignIn Stack 
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
       title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
    }}
 />
    </SignInstack.Navigator>
  )
}
//Donate Stack 
const DonateStackScreen = ({navigation}) =>{
  return(
    <Donatestack.Navigator 
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
    <Donatestack.Screen
     name="Donate"
     component={Donate}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </Donatestack.Navigator>
  )
}
//Admin Stack 
const AdminStackScreen = ({navigation}) =>{
  return(
    <AdminProfilestack.Navigator 
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
    <AdminProfilestack.Screen
     name="Profile"
     component={AdminProfile}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </AdminProfilestack.Navigator>
  )
}
//Parent Stack 
const ParentStackScreen = ({navigation}) =>{
  return(
    // Parent
    <ParentStack.Navigator 
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
    <ParentStack.Screen
     name="Parent"
     component={Parent}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    <ParentStack.Screen
     name="parentProfile"
     component={parentProfile}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
  <ParentStack.Screen
     name="MusicApp"
     component={MusicApp}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
  <ParentStack.Screen
     name="SignUp" 
     component={SignUp}  
     options={{ 
      title: 'Kiddo',
      headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      }) }/>)
   }}/>

    </ParentStack.Navigator>
  )
}

const HistoryStackScreen = ({navigation}) =>{
  return(
    <Historystack.Navigator 
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
    <Historystack.Screen
     name="History"
     component={History}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </Historystack.Navigator>
  )
}
// The App 
class App extends React.Component {
  constructor(){
    super()
    this.state={
      token:''
    }
  }

  
  render(){
  return (
    <Provider store={store}>
      <SafeAreaProvider>
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={ (props) => { return  <DrawerContent {...props}/>}}> 
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
        <Drawer.Screen name="Donate" component={DonateStackScreen} />
        <Drawer.Screen name="Profile" component={AdminStackScreen} />
        <Drawer.Screen name="Parent"  component={ParentStackScreen} />
        <Drawer.Screen name="parentProfile"  component={ParentStackScreen} />
        <Drawer.Screen name="History"  component={HistoryStackScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  ); 
}}


export default App 