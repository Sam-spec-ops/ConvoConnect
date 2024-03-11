import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./bookmarks/BibleApp"
import Page from "./bookmarks/BiblePage"
import Bible from "./bookmarks/BibleList"
import Chapter from "./bookmarks/BibleChapter"
import Verse from "./bookmarks/BibleVerse"
import Search from "./bookmarks/SearchVerse"
import Study from './bookmarks/BibleStudy'
import Guide from './bookmarks/BibleGuide'
import Save from './bookmarks/BookMark'
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen options={{gestureDirection:"horizontal",gestureEnabled:true}} name="Home" component={Home} />
        <Stack.Screen name="Page" component={Page} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="Bible" component={Bible} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="Chapter" component={Chapter} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="Verse" component={Verse} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="Search" component={Search} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="Study" component={Study} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="Guide" component={Guide} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name="Save" component={Save} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Your styles can remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
