import { useEffect } from "react";
import { Text, TouchableOpacity, View,ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateTable from "./services/createtable";
const BookMark = ({navigation}) => {
    useEffect(()=>{
        CreateTable()
    },[])
  return (
    <View className="flex h-full w-screen bg-green-900">
        <View className="bg-yellow-500 h-16 w-screen flex justify-end pb-2">
                <Text className="text-green-900 font-bold text-2xl text-center">Favourite Verses</Text>
        </View>
        
        <ScrollView className="flex-1 pt-3 w-screen">
            <View className="flex-1 gap-4 justify-center items-center">
                <TouchableOpacity className="w-72 rounded-2xl h-12 flex justify-center bg-white">
                    <Text className="text-green-900 text-center text-xl">Isaiah 41:2</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-72 rounded-2xl h-12 flex justify-center bg-white">
                    <Text className="text-green-900 text-center text-xl">Isaiah 41:2</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-72 rounded-2xl h-12 flex justify-center bg-white">
                    <Text className="text-green-900 text-center text-xl">Isaiah 41:2</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-72 rounded-2xl h-12 flex flex-row items-center justify-center bg-white">
                    <Text className="text-green-900 text-center text-xl">Isaiah 41:2</Text>
                </TouchableOpacity>
            </View>
            <View className="items-center pt-7">
                <TouchableOpacity className="w-72 rounded-2xl h-12 flex flex-row items-center justify-center bg-yellow-500">
                    <Text className="text-white text-center text-xl">Add </Text>
                    <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    
        <View className="h-20 bg-green-950 shadow-xl flex flex-row justify-between px-3 items-center shadow-black">
            <TouchableOpacity className="items-center" onPress={()=>navigation.navigate('Page')}>
                <Text><Icon name="home" size={35} color="orange" /></Text>
                <Text className="text-yellow-500">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Text><Icon name="cogs" size={30} color="orange" /></Text>
                <Text className="text-yellow-500">Settings</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BookMark