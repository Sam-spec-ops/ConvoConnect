import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, FlatList, Clipboard } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CameraView } from 'expo-camera'
import { CameraType, FlashMode } from "expo-camera/build/legacy/Camera.types";
import * as MediaLibrary from 'expo-media-library'
const VideoCall = ({navigation}) => {
    const cameraRef = useRef(null) 
    const [facing, setFacing] = useState(CameraType.front);
    const toogleCameraFacing = () => {
        setFacing((current) => (current === "front" ? CameraType.back : CameraType.front));
        console.log(facing);
    };
    return (
        <View className="h-full w-screen flex">
            <ExpoStatusBar />
            <CameraView className="flex-1" ref={cameraRef} facing={facing}></CameraView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Chats");
                }}
                className="h-12 w-12 flex justify-center items-center absolute left-1 top-5"
            >
                <Icon name="chevron-left" color="gainsboro" size={50} />
            </TouchableOpacity>
            <View className="w-screen bg-zinc-800 items-center h-20 rounded-t-2xl bottom-0 absolute flex flex-row justify-evenly">
                <TouchableOpacity onPress={toogleCameraFacing} className="flex justify-center items-center h-14 w-14 rounded-full">
                    <Icon name="camera-switch" color="gainsboro" size={30} />
                </TouchableOpacity>
                <TouchableOpacity className="flex justify-center items-center h-14 w-14 rounded-full">
                    <Icon name="microphone-off" color="gainsboro" size={32} />
                </TouchableOpacity>
                <TouchableOpacity className="flex justify-center items-center h-14 w-14 rounded-full">
                    <Icon name="account-plus" color="gainsboro" size={35} />
                </TouchableOpacity>
                <TouchableOpacity className="bg-red-600 flex justify-center items-center h-14 w-14 rounded-full">
                    <Icon name="phone" color="gainsboro" size={25} />
                </TouchableOpacity>
            </View>
            <View className="top-16 flex items-center w-screen absolute">
                <Text className="text-gray-100 mb-7 font-medium"><Icon size={15} color="gainsboro" name="lock" />end to end encrypted</Text>
                <Text className="text-gray-100 mb-3 font-bold text-4xl">Samuel Oni</Text>
                <Text className="text-gray-100 text-xl font-semibold">Ringing</Text>
            </View>
        </View>
    );
};

export default VideoCall;
