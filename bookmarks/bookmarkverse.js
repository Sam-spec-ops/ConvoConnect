import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { useEffect } from 'react'
import CreateTable from './services/createtable'
const BookmarkVerses = ()=>{
    useEffect(()=>{
        CreateTable();
    },[])
    return(
        <View className="h-full flex w-screen bg-green-900">
            <View className="bg-yellow-500 h-12 w-screen flex justify-end pb-2">
                <Text className="text-green-900 font-bold text-2xl text-center">Favourite Verses</Text>
            </View>
            <View>
                <ScrollView className="flex-1 pt-3 w-screen">
                    <View className="flex-1">
                        <TouchableOpacity className="w-72 rounded-2xl h-12 flex justify-center bg-white">
                            <Text className="text-green-900 text-center text-xl">Isaiah 41:2</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View className="items-center">
            <TouchableOpacity className="w-72 rounded-2xl h-12 flex justify-center bg-yellow-500">
                <Text className="text-white text-center text-xl">Isaiah 41:2</Text>
            </TouchableOpacity>
            </View>
            <View className="h-20 bg-green-950 shadow-xl flex flex-row justify-between px-3 items-center shadow-black">
                <View className="items-center">
                    <Text><Icon name="home" size={30} color="orange" /></Text>
                    <Text className="text-yellow-500">Home</Text>
                </View>
                <View className="items-center">
                    <Text><Icon name="cogs" size={30} color="orange" /></Text>
                    <Text className="text-yellow-500">Settings</Text>
                </View>
            </View>
        </View>
    )
}
export default BookmarkVerses