import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tile } from '@rneui/themed';
import Home from './Home.js'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { InstructionsThrow } from './Instructions';
import { HeaderBackButton } from '@react-navigation/elements';
import { Throw } from './Games.js';



const Stack = createNativeStackNavigator();

const back = (navigation) => (
  <HeaderBackButton
    onPress={() =>navigation.navigate("Home")}
    title="Info"
    color="#fff"
  />
)

export default function App({navigation}) {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}></Stack.Screen>
    <Stack.Screen
          name="InstructThrow"
          component={InstructionsThrow}


          options={{title: 'How To Play',}}></Stack.Screen>
        <Stack.Screen
          name="Throw"
          component={Throw}


          options={{title: 'Play!',}}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  img: {
    height: 200,
    width: 360,
    borderRadius: 40
  }
});
