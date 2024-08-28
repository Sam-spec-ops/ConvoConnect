import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import socket from "./Socket";
import Icon from "react-native-vector-icons/FontAwesome6";
import * as ImagePicker from "expo-image-picker";
const Profile = ({ navigation }) => {
    const [photo, setPhoto] = useState("");
    const PickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === "granted") {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                setPhoto(result.assets[0].uri);
                console.log(photo);
            }
        }
    };
    return (
        <View className="h-full w-screen flex">
            <ExpoStatusBar />
            <View className="flex flex-row items-center h-32 w-full bg-blue-950">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Chats");
                    }}
                    className="h-10 w-10 rounded-full flex justify-center items-center mr-3"
                >
                    <Icon name="angle-left" size={30} color="gainsboro" />
                </TouchableOpacity>
                <Text className="text-lg font-semibold text-slate-300">Profile</Text>
            </View>
            <ScrollView className="flex-1 rounded-t-3xl -mt-6 bg-slate-300">
                <View className=" w-screen pt-10 flex items-center">
                    <View className="bg-stone-400 h-44 w-44 flex justify-end items-end rounded-full">
                        <TouchableOpacity className="h-44 w-44 bg-stone-400  flex justify-center items-center rounded-full">
                            {
                                photo === "" ? <Icon name="user" size={40} color="gainsboro" /> : <Image source={{uri:photo}} resizeMode="cover" className="h-44 w-44 rounded-full" />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={PickImage}
                            className="bg-blue-950 h-14 w-14 absolute rounded-full flex justify-center items-center"
                        >
                            <Icon name="camera" size={25} color="gainsboro" />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View>
                    <View className="w-screen px-7 mt-12 mb-5 flex flex-row justify-between items-start">
                        <View className="h-8 w-8 rounded-2xl flex items-center justify-center ">
                            <Icon name="user" color="rgb(148 163 184)" size={23} />
                        </View>
                        <View className="flex flex-1 ml-3 space-y-2">
                            <Text className="text-slate-600">Username</Text>
                            <Text className="text-base">TESLA</Text>
                        </View>
                        <View>
                            <Icon name="pen" size={22} color="rgb(23 37 84)" />
                        </View>
                    </View>
                    <View className="w-screen px-7 mb-5 flex flex-row justify-between items-start">
                        <View className="h-7 w-7 rounded-2xl border-2 border-slate-400 flex items-center justify-center ">
                            <Icon name="info" color="rgb(148 163 184)" size={15} />
                        </View>
                        <View className="flex flex-1 ml-3 space-y-2">
                            <Text className="text-slate-600">About</Text>
                            <Text className="text-base">Developer</Text>
                        </View>
                        <View>
                            <Icon name="pen" size={22} color="rgb(23 37 84)" />
                        </View>
                    </View>
                    <View className="w-screen px-7 mb-5 flex flex-row justify-between items-start">
                        <View className="h-8 w-8 rounded-2xl flex items-center justify-center ">
                            <Icon name="envelope" color="rgb(148 163 184)" size={23} />
                        </View>
                        <View className="flex flex-1 ml-3 space-y-2">
                            <Text className="text-slate-600">Email</Text>
                            <Text className="text-base">samueloni0987@gmail.com</Text>
                        </View>
                        <View>
                            <Icon name="pen" size={22} color="rgb(23 37 84)" />
                        </View>
                    </View>
                    <View className="w-screen px-7 flex flex-row justify-between items-start">
                        <View className="h-7 w-7 rounded-2xl border-2 border-slate-400 flex items-center justify-center ">
                            <Icon name="info" color="rgb(148 163 184)" size={15} />
                        </View>
                        <View className="flex flex-1 ml-3 space-y-2 mb-5">
                            <Text className="text-slate-600">Description</Text>
                            <Text className="text-base">
                                Web developer and cross platform app developer with React-Native, Flutter, Node JS, React and Tailwindcss
                            </Text>
                        </View>
                        <View>
                            <Icon name="pen" size={22} color="rgb(23 37 84)" />
                        </View>
                    </View>
                </View>
                
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Login");
                        }}
                        className="w-screen pl-7 mb-3 flex flex-row space-x-2"
                    >
                        <Icon name="share-from-square" color="rgb(23 37 84)" size={25} />
                        <Text className="text-base font-semibold text-blue-950">Sign Out</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
export default Profile;
