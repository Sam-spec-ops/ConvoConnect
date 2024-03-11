import { View,Text, ScrollView, TouchableOpacity } from "react-native";
import Biblestudy from './JSON/biblestudy2024.json'
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
const BibleGuide = ({navigation ,route})=>{
const { params } = route;
const date = params?.date;
console.log(date)
const [bibleData, setBibleData] = useState(Biblestudy);
const [data, setData] = useState([]);



const handleBibleData = () => {
    const filteredData = bibleData.filter(item => item.DATE === date);
    setData(filteredData);
};
useEffect(() => {
handleBibleData();
}, [date]);

const fontsize = [10,12,14,16,24]
const [count,setcount] = useState(1)
console.log(data)
const handlecountplus=()=>{
if(count>4){
    return count<6
}
setcount(add=>add+1)

if(count===5){
    return
}
}
const handlecountminus=()=>{
if(count<2){
    return
}
setcount(add=>add-1)
if(count===1){
    return
}
}
    return( 
        <View className="h-full w-screen flex bg-green-900">
            <View className="bg-yellow-500 h-20  w-screen flex justify-end pb-2">
                <Text className="text-green-900 font-bold text-3xl text-center">The Christain Race</Text>
           </View>
           <ScrollView className="flex-1 py-5 pl-1.5">
            <View>
            {data.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>No Bible study data available for this date.</Text>
                </View>
            ) : (
                <ScrollView style={{ flex: 1, paddingBottom: 45 }}>
                    {data.map((item, index) => (
                        <View key={index} className="justify-center flex gap-4 w-screen items-center">
                          <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">{item['DATE']}</Text></View>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">TOPIC</Text></View>
                            <View className="w-72 h-16 bg-white rounded-xl flex items-center justify-center"><Text className="text-xl">{item['TOPIC'].toUpperCase()}</Text></View>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-xl font-bold">TEXT</Text></View>
                            <View className="w-72 h-16 bg-white rounded-2xl flex items-center justify-center"><Text className="text-xl">{item['TEXTS']}</Text></View>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">AIMS</Text></View>
                            <ScrollView className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><Text style={{fontSize:fontsize[count-1]}}>{item['AIMS']}</Text></ScrollView>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">INTRODUCTION</Text></View>
                            <ScrollView className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><Text style={{fontSize:fontsize[count-1]}}>{item['INTRODUCTION']}</Text></ScrollView>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">STUDY GUIDES</Text></View>
                            <ScrollView className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><Text style={{fontSize:fontsize[count-1]}}>{item['STUDY GUIDES']}</Text></ScrollView>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">FOOD FOR THOUGHTS</Text></View>
                            <ScrollView className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><Text style={{fontSize:fontsize[count-1]}}>{item['FOOD FOR THOUGHTS']}</Text></ScrollView>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">CONCLUSION</Text></View>
                            <ScrollView className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><Text style={{fontSize:fontsize[count-1]}}>{item['CONCLUSION']}</Text></ScrollView>
                            <View className="bg-amber-500 rounded-2xl flex justify-center items-center  h-10 w-72"><Text className="text-2xl font-bold">MEMORYVERSE</Text></View>
                            <ScrollView className="w-72 h-fit py-2 px-2 bg-white rounded-2xl"><Text style={{fontSize:fontsize[count-1]}}>{item['MEMORY VERSE']}</Text></ScrollView>
                            
                        </View>
                    ))}
                </ScrollView>
            )}
            </View>
           </ScrollView>
           <View className="flex flex-row gap-3 w-screen h-fit py-2 bg-green-900 items-center justify-center ">
            <TouchableOpacity className=" items-center bg-amber-500 h-10 rounded-xl w-10 flex justify-center" onPress={handlecountminus}><Icon name="minus" size={25} /></TouchableOpacity>
            <View className="flex justify-center w-fit items-center h-fit gap-1"><Text className="text-lg">fontsize</Text><Text className="text-3xl">{count}</Text></View>
            <TouchableOpacity onPress={handlecountplus} className=" items-center bg-amber-500 h-10 rounded-xl w-10 flex justify-center"><Icon name="plus" size={25} /></TouchableOpacity>
          </View>
           <View className="h-24 w-screen flex flex-row bg-green-950 py-5 px-3 justify-between">
                <TouchableOpacity onPress={() => navigation.navigate("Study")} className="h-12 w-12 rounded-full bg-amber-500 flex justify-center items-center">
                    <Icon name="arrow-left" size={37} color="#011" />
                </TouchableOpacity>
                <Icon onPress={() => navigation.navigate("Page")} name="home" color="orange" size={60} />
          </View>
        </View>
    )
}
export default BibleGuide;