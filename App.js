import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from './screen/Chats';
import Messages from './screen/Messages';
import Login from './screen/Login';
import Start from './screen/Start';
import Register from './screen/Register';
import AddChat from './screen/AddChat';
import Form from './screen/Form';
import CameraView from './screen/Camera'
import Settings from './screen/Settings'
import VideoCall from './screen/VideoCall'
import AudioCall from './screen/AudioCall'
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name='Form' component={Form} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name='Start' component={Start} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name='Chats' component={Chats} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name="Message" component={Messages} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name="Login" component={Login} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name="Register" component={Register} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name="Add-Chat" component={AddChat} options={{gestureDirection:"horizontal",gestureEnabled:true}}/>
        <Stack.Screen name="Camera" component={CameraView} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="Settings" component={Settings} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="VideoCall" component={VideoCall} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
        <Stack.Screen name="AudioCall" component={AudioCall} options={{gestureDirection:"horizontal",gestureEnabled:true}} />
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
