import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppLoading } from 'expo';
import Signin from './screens/admin-signin'
<<<<<<< HEAD
=======
import Home from './screens/home-comp'
import Videos from './screens/videos'
// import Games from './screens/games'
// import Videos from './screens/videos'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//const Stack = createStackNavigator()
// import star from './android/imgs/star'
// <Home />
// const getFonts = () => {
//   return Font.loadAsync({
//       'font1':require('./screens/assests/fonts/Teko-Medium.ttf'),
//       'font2':require('./screens/assests/fonts/Teko-Bold.ttf')
//   })
// }
export default function App() {
  return (
    <Videos/>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="kids">
    //     <Stack.Screen name="Games" component={Home} />
    //     <Stack.Screen name="Signin" component={Signin} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
  //   const [fontsLoaded,setFontsLoaded] =useState(false);
  //   if(fontsLoaded){  
  //     return (
  //     <Learn />
  //   )
  // }else{  
  //   return(
  //     <AppLoading
  //     startAsync={getFonts}
  //     onFinish={()=> setFontsLoaded(true)}
  //     />  )}   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 6e49f525e1c2e11a81b69ad502259d9e3590ae3d

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


const Stack = createStackNavigator();

export default function App() {
  return (
    // <HomeStack/>
     <NavigationContainer>
       {/* Home Screen Categories */}
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
        />
           <Stack.Screen name="Learn" component={Learn} />
           <Stack.Screen name="Art" component={Art} />
           <Stack.Screen name="Videos" component={Videos} />
           <Stack.Screen name="Album" component={Album} />
           <Stack.Screen name="Games" component={Games} />
           {/* Learn Catagories  */}
           <Stack.Screen name="Alphabet" component={Alphabet} />
           <Stack.Screen name="Numbers" component={Numbers} />
           <Stack.Screen name="BodyPart" component={BodyPart} />
           <Stack.Screen name="Fruits" component={Fruits} />
           <Stack.Screen name="Vegatables" component={Vegatables} />
           <Stack.Screen name="Colors" component={Colors} />
           <Stack.Screen name="Animals" component={Animals} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}