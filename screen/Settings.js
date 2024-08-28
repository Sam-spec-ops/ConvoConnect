import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Platform,
    Image,
    SafeAreaView,
    StyleSheet,
    Clipboard,
} from "react-native";
import { MaterialCommunityIcons } from "expo-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome6";
const Settings = () => {
  return (
    <View className="h-full flex bg-zinc-200">
            <SafeAreaView style={styles.android} className="flex-1 flex">
                <StatusBar />
                <View className="flex flex-row items-center h-32 w-full bg-blue-950">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Chats");
                    }}
                    className="h-10 w-10 rounded-full flex justify-center items-center mr-3"
                >
                    <Icon name="angle-left" size={30} color="gainsboro" />
                </TouchableOpacity>
                <Text className="text-lg font-semibold text-slate-300">Settings</Text>
            </View>
                <ScrollView className="flex-1 rounded-t-3xl -mt-6 px-5 bg-slate-300 space-y-5">
                    <TouchableOpacity className="bg-white mt-7 w-full h-20 rounded-xl flex flex-row items-center justify-between px-5">
                       <View className="flex flex-row space-x-4 items-center">
                            <MaterialCommunityIcons name="account-circle" color="rgb(82 82 91)" size={30} />
                            <Text className="text-lg font-semibold">Profile</Text>
                       </View>
                       <MaterialCommunityIcons name="chevron-right" color="rgb(82 82 91)" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white w-full h-20 rounded-lg flex flex-row items-center justify-between px-5">
                       <View className="flex flex-row space-x-4 items-center">
                            <MaterialCommunityIcons name="update" color="rgb(82 82 91)" size={30} />
                            <Text className="text-lg font-semibold">Upgrade Account</Text>
                       </View>
                       <MaterialCommunityIcons name="chevron-right" color="rgb(82 82 91)" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white w-full h-20 rounded-lg flex flex-row items-center justify-between px-5">
                       <View className="flex flex-row space-x-4 items-center">
                            <MaterialCommunityIcons name="account-settings" color="rgb(82 82 91)" size={25} />
                            <Text className="text-lg font-semibold">Account Settings</Text>
                       </View>
                       <MaterialCommunityIcons name="chevron-right" color="rgb(82 82 91)" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white w-full h-20 rounded-lg flex flex-row items-center justify-between px-5">
                       <View className="flex flex-row space-x-4 items-center">
                            <MaterialCommunityIcons name="delete-outline" color="rgb(82 82 91)" size={27} />
                            <Text className="text-lg font-semibold">Delete Account</Text>
                       </View>
                       <MaterialCommunityIcons name="chevron-right" color="rgb(82 82 91)" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white w-full h-20 rounded-lg flex flex-row items-center justify-between px-5">
                       <View className="flex flex-row space-x-4 items-center">
                            <MaterialCommunityIcons name="logout" color="red" size={25} />
                            <Text className="text-lg font-semibold text-red-500">LogOut</Text>
                       </View>
                       <MaterialCommunityIcons name="chevron-right" color="red" size={25} />
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};
const styles = StyleSheet.create({
    android: {
        paddingTop: Platform.OS === "android" ? 20 : 0,
    },
});

export default Settings