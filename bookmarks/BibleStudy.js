import { SafeAreaView } from "react-native-safe-area-context"
import { View, TextInput, TouchableOpacity, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { useState,useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Biblestudy from './JSON/biblestudy2024.json'
const BibleStudy = ({ navigation }) => {
    const [bibledata, setBibleData] = useState(Biblestudy);
    const [getvalue, setGetValue] = useState("");

    const handleShowBook = () => {
        const filteredData = Biblestudy.filter(item =>
            item.DATE.toLowerCase().includes(getvalue.toLowerCase())
        );
        setBibleData(filteredData);
    };

    useEffect(() => {
        handleShowBook();
    }, [getvalue]);

    return (
        <View className="bg-green-950 w-screen h-full flex">
            <View className="bg-yellow-500 h-20 w-screen flex justify-end pb-2">
                <Text className="text-green-900 font-bold text-3xl text-center">The Christian Race</Text>
            </View>
            <View className="flex w-screen items-center py-3 justify-center">
                <TextInput
                    placeholder="Search for Date"
                    onChangeText={setGetValue} // Use onChangeText instead of onChange
                    className="focus:placeholder:invisible border pl-1 outline-0 bg-slate-100 py-1 h-10 rounded-lg w-72 border-black"
                />
            </View>
            <ScrollView className="flex-1">
                <View className="flex gap-4 justify-center pl-3 items-center w-screen">
                    {bibledata.map((item, index) => (
                        <TouchableOpacity
                            key={index} // Add key prop for list items
                            onPress={() => navigation.navigate("Guide", { date: item.DATE})}
                            className={`rounded-xl h-15 gap-1 w-80 py-2 flex justify-center items-center text-2xl bg-amber-500`}
                        >
                            <Text className="text-white text-xl font-bold">{item.DATE.toUpperCase()}</Text>
                            <Text className="text-green-900 font-bold text-lg">{item.TOPIC.toUpperCase()}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View className="h-24 w-screen flex flex-row bg-green-950 py-5 px-3 justify-between">
                <TouchableOpacity onPress={() => navigation.navigate("Page")} className="h-12 w-12 rounded-full bg-amber-500 flex justify-center items-center">
                    <Icon name="arrow-left" size={37} color="#011" />
                </TouchableOpacity>
                <Icon onPress={() => navigation.navigate("Page")} name="home" color="orange" size={60} />
            </View>
        </View>
    );
};

export default BibleStudy;
