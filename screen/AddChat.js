import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useEffect, useState } from "react";
import { View, TextInput, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6'
import socket from "./Socket";
const AddChat = ({ navigation }) => {
    const groupId = 1
    const members = {
        'me':socket.id,
        'you':socket.id
    };
    const createGroup = ()=>{
        socket.emit('createGroup',{groupId,members})
    }
    return (
        <View className="h-full w-full flex bg-slate-300">
            <ExpoStatusBar />
            <View className="flex flex-row items-center px-4 h-32 w-full bg-blue-950">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Chats");
                    }}
                    className="h-10 w-10 rounded-full flex justify-center items-center mr-3"
                >
                    <Icon name="angle-left" size={30} color="gainsboro" />
                </TouchableOpacity>
                <Text className="text-lg font-semibold text-slate-300">Add new Chat</Text>
            </View>
            <ScrollView className="flex-1 -mt-5 rounded-t-3xl bg-slate-300 py-5 px-3 flex">
                <TouchableOpacity onPress={createGroup} className="h-20 w-full flex flex-row ml-5 items-center">
                    <Text className="text-2xl mr-3 font-bold">+</Text>
                    <Text className="text-lg font-bold">New Group</Text>
                </TouchableOpacity>
                <View className="flex">
                    <TouchableOpacity className="h-24 w-full flex flex-row gap-3 items-center">
                        <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                            <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                        </TouchableOpacity>
                        <View className="flex">
                            <Text className="text-lg font-semibold">Samuel</Text>
                            <Text className="text-xs text-slate-400">Web developer 🥷🥷🥷</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="h-24 w-full flex flex-row gap-3 items-center">
                        <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                            <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                        </TouchableOpacity>
                        <View className="flex">
                            <Text className="text-lg font-semibold">Samuel</Text>
                            <Text className="text-xs text-slate-400">Web developer 🥷🥷🥷</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="h-24 w-full flex flex-row gap-3 items-center">
                        <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                            <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                        </TouchableOpacity>
                        <View className="flex">
                            <Text className="text-lg font-semibold">Samuel</Text>
                            <Text className="text-xs text-slate-400">Web developer 🥷🥷🥷</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="h-24 w-full flex flex-row gap-3 items-center">
                        <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                            <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                        </TouchableOpacity>
                        <View className="flex">
                            <Text className="text-lg font-semibold">Samuel</Text>
                            <Text className="text-xs text-slate-400">Web developer 🥷🥷🥷</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="h-24 w-full flex flex-row gap-3 items-center">
                        <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                            <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                        </TouchableOpacity>
                        <View className="flex">
                            <Text className="text-lg font-semibold">Samuel</Text>
                            <Text className="text-xs text-slate-400">Web developer 🥷🥷🥷</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="h-24 w-full flex flex-row gap-3 items-center">
                        <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                            <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                        </TouchableOpacity>
                        <View className="flex">
                            <Text className="text-lg font-semibold">Samuel</Text>
                            <Text className="text-xs text-slate-400">Web developer 🥷🥷🥷</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default AddChat;
