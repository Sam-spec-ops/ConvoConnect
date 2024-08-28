import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import socket from "./Socket";
import Icon from "react-native-vector-icons/FontAwesome6";
const Chats = ({ navigation }) => {
    const [getChats, setGetChats] = useState([]);
    const username = 'Tesla'
    const addUser = ()=>{
        if(username.trim !== ""){
            const status = socket.emit('newUser',username)
        }
    };
    useEffect(() => {
        const totalChats = 50;
        let array = [];
        for (let index = 1; index <= totalChats; index++) {
            array.push(index);
        }
        setGetChats(array);
        addUser()
    }, []);
    return (
        <View className="h-full w-full flex bg-slate-300">
            <ExpoStatusBar />
            <View className="w-full h-40 bg-blue-950 flex flex-row justify-between items-center px-5">
                <Text className="text-white text-3xl font-bold mb-2">Convo Connect</Text>
                {/* <TouchableOpacity onPress={()=>{navigation.navigate('Camera')}} className="h-8 w-8 rounded-full flex justify-center items-center"><Icon name="camera" size={30} color="gainsboro" /></TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Settings");
                    }}
                    className="h-8 w-8 rounded-full flex justify-center items-center"
                >
                    <Icon name="gear" size={30} color="gainsboro" />
                </TouchableOpacity>
                {/* <TextInput className="w-80 bg-white rounded-2xl pl-2 h-11" autoCorrect={true} placeholder='Search' /> */}
            </View>
            <ScrollView className="flex-1 -mt-5 flex rounded-t-3xl px-3 bg-slate-300">
                {getChats.map((item, index) => (
                    <TouchableOpacity onPress={()=>{navigation.navigate("Message")}} key={index} className="w-full h-20  flex flex-row items-center">
                        <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                            <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{navigation.navigate("Message")}} className="flex gap-1 flex-1 pl-2">
                            <View className="flex flex-row justify-between">
                                <Text className="font-semibold text-lg">Samuel</Text>
                                <Text className="text-slate-500">12:19</Text>
                            </View>
                            <View className="flex flex-row justify-between">
                                <Text className="text-sm text-slate-400">Hi, how are you doing</Text>
                                <View className="flex justify-center items-center bg-pink-300 h-4 w-4 rounded-full">
                                    <Text className="text-xs">{item}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {/* <View className="rounded-t-3xl flex flex-row items-center justify-evenly px-2 bg-slate-300 h-20 w-full">
            <TouchableOpacity className="flex items-center"><View className="h-10 w-10 bg-slate-900 rounded-full"><Icon name="phone" size={20} color="grey"/></View><Text className="text-slate-400">Chats</Text></TouchableOpacity>
            <TouchableOpacity className="flex items-center"><View className="h-10 w-10 bg-slate-900 rounded-full"><Icon name="phone" size={20} color="grey"/></View><Text className="text-slate-400">Friends</Text></TouchableOpacity>
            <TouchableOpacity className="flex items-center"><View className="h-10 w-10 bg-slate-900 rounded-full"><Icon name="phone" size={20} color="grey"/></View><Text className="text-slate-400">Calls</Text></TouchableOpacity>
            <TouchableOpacity className="flex items-center"><View className="h-10 w-10 bg-slate-900 rounded-full"><Icon name="phone" size={20} color="grey"/></View><Text className="text-slate-400">Settings</Text></TouchableOpacity>
        </View> */}
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Add-Chat");
                }}
                className="bg-slate-800 h-14 w-14 rounded-full absolute bottom-10 right-5 flex justify-center items-center"
            >
                <Text className="text-4xl text-white font-semibold">+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Chats;
