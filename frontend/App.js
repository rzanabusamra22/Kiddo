// Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as React from 'react';
// Redux
import { SafeAreaProvider } from 'react-native-safe-area-context';
import rootReducer from './screens/redux/reducers';
import { Provider } from 'react-redux';
import {createStore} from 'redux'; 
const store = createStore(rootReducer);
// Home Screen
import Home from './screens/Home'
import Learn from './screens/Learn';
import Art from './screens/Art';
import Videolists from './screens/VideoLists';
import Videos from './screens/Videos';
import Video from './screens/Video';
import Game from './screens/Game';
import Album from './screens/Album';
import Games from './screens/Games';
// Learn Catagories 
import Alphabet from './screens/subScreens/Alphabet'
import Numbers from './screens/subScreens/Numbers';
import BodyPart from './screens/subScreens/BodyPart';
import Fruits from './screens/subScreens/Fruits';
import Vegatables from './screens/subScreens/Vegatables';
import Colors from './screens/subScreens/Colors';
import Animals from './screens/subScreens/Animals';
// Art Catagories 
import Coloring from './screens/subScreens/Coloring';
import ColoringS from './screens/subScreens/Colorings';
import Drawing from './screens/subScreens/Drawing';
import Draw from './screens/subScreens/Draw';
// Drawer Pages
import Donate from './screens/Donate';
import Profile from './screens/Profile';
import DrawerContent from './screens/DrawerContent';
// User
import SignUp from './screens/user/SignUp'
import SignIn from './screens/user/SignIn'
import Success from './screens/user/Success'
import History from './screens/History'
// Navigation
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DonateStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const SignInStack = createStackNavigator();
// Home Stack 
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
// Donation Stack 
const DonateStackScreen = ({navigation}) =>{
  return(
    <DonateStack.Navigator 
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
    <DonateStack.Screen
     name="Donate"
     component={Donate}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </DonateStack.Navigator>
  )
}
// Profile Stack 
const ProfileStackScreen = ({navigation}) =>{
  return(
    <ProfileStack.Navigator 
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
    <ProfileStack.Screen
     name="Profile"
     component={Profile}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </ProfileStack.Navigator>
  )
}
// SignUp Stack 
const SignUpStackScreen = ({navigation}) =>{
  return(
    // SignUp
    <SignUpStack.Navigator 
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
     <SignUpStack.Screen
        name="SignUp" 
        component={SignUp}  
        options={{ 
         title: 'Kiddo',
         headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.reset({
           index: 0,
           routes: [{ name: 'Home' }],
         }) }/>)
      }}/>
   
    <SignUpStack.Screen
     name="Success"
     component={Success}
     options={{ 
      title: 'Kiddo',
      headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
  <SignUpStack.Screen
     name="SignIn"
     component={SignIn}
     options={{ 
      title: 'Kiddo',
      headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
     headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
    />
    </SignUpStack.Navigator>
  )
}
// SignIn Stack 
const SignInStackScreen = ({navigation}) =>{
  return(
    <SignInStack.Navigator 
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
    <SignInStack.Screen
     name="SignIn"
     component={SignIn}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </SignInStack.Navigator>
  )
}

const HistoryStackScreen = ({navigation}) =>{
  return(
    <HistoryStack.Navigator 
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
    <HistoryStack.Screen
     name="History"
     component={History}
     options={{ 
      title: 'Kiddo',
     headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor={"#f4511e"} onPress={()=> navigation.openDrawer()}/> ),
       headerRight: () => (<Icon.Button name="ios-home" size={20} backgroundColor={"#f4511e"} onPress={()=> navigation.navigate('Home')}/>),
    }}
 />
    </HistoryStack.Navigator>
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
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Donate" component={DonateStackScreen} />
        <Drawer.Screen name="History" component={HistoryStackScreen} />
        <Drawer.Screen name="SignUp" component={SignUpStackScreen} />
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  ); 
}}

export default App 
