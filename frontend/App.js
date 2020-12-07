import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppLoading } from 'expo';
import Signin from './screens/admin-signin'

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

