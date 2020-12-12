import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
//redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './screens/redux/reducers.js';
const store = createStore(rootReducer);
// Home Screen Categories
import Home from './screens/home-comp'
import Learn from './screens/learn';
import Art from './screens/art';
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
import Drawing from './screens/subScreens/Drawing';
//Drawer Pages
import Signin from './screens/admin-signin';
import Donate from './screens/donate';
import AdminProfile from './screens/AdminProfile';
//Admin Signed In
import DrawerContent from './screens/DrawerContent';
//Admin Needs to Sign In
import DrawerContent2 from './screens/DrawerContent2';

//Navigation
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SignInstack = createStackNavigator();
const Donatestack = createStackNavigator();
const AdminProfilestack = createStackNavigator();
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
    <HomeStack.Screen name="Learn" component={Learn} />
    <HomeStack.Screen name="Art" component={Art} />
    <HomeStack.Screen name="Video" component={Video} />
    <HomeStack.Screen name="Videos" component={Videos} />
    <HomeStack.Screen name="Album" component={Album} />
    <HomeStack.Screen name="Games" component={Games} />
    <HomeStack.Screen name="Game" component={Game} />
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
       title: 'Signin',
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
       title: 'Donate',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
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
       title: 'Profile',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> )
    }}
 />
    </AdminProfilestack.Navigator>
  )
}

// The App 
class App extends React.Component {
  constructor(){
    super()
    this.state={

    }
  }

  componentDidMount(){

  }
  render(){
  return (
    <Provider store={store}>
    <audio id="sound"></audio>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => 
       {
       if(localStorage.getItem('token')){
       return  <DrawerContent {...props}/>
       }
       else {
       return  <DrawerContent2 {...props}/> 
       }
       }}> 
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
        <Drawer.Screen name="Donate" component={DonateStackScreen} />
        <Drawer.Screen name="Profile" component={AdminStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  ); 
}}
export default App 
