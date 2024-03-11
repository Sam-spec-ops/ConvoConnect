import React, { useEffect, useState } from 'react';
import { Image, View, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Biblelist from './JSON/Biblelist.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const BibleList = ({ navigation }) => {
  const [data, setdata] = useState(Biblelist.books);
  const [getvalue, setgetvalue] = useState("");

  const handleshowbook = () => {
    const getmydata = Biblelist.books.filter((item) => {
      const book = item.book || "";
      return book.toLowerCase().includes(getvalue.toLowerCase());
    });

    setdata(getmydata);
  };

  useEffect(() => {
    handleshowbook();
  }, [getvalue]);

  return (
    <SafeAreaView className="flex bg-slate-100 h-full w-screen">
      <View className="h-44 pl-3 gap-4 px-5 pt-7 bg-slate-100 flex w-screen">
        <View className="flex flex-row gap-1 pl-3 text-3xl justify-start w-screen items-center font-normal">
          <Image resizeMode="contain" className="w-12 h-12" source={require('./Images/download (1).png')} />
          <Text className="text-2xl">List Of Books</Text>
        </View>
        <View className="flex w-screen pl-3 justify-center">
          <TextInput onChangeText={(value) => setgetvalue(value)} placeholder="Search for Books" className="focus:placeholder:invisible border pl-1 outline-0 bg-slate-100 py-2 rounded-lg w-72 border-black" />
        </View>
      </View>
      <ScrollView className="bg-slate-100 flex-1">
        <View className="bg-slate-100 flex gap-4 items-center justify-center pt-6 pb-6 w-screen">
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("Chapter", { book: item.book })} className={`rounded-2xl h-10 w-72 py-1 flex justify-center text-2xl items-center bg-amber-500 text-white ${index % 2 === 0 ? 'bg-amber-500' : 'bg-green-950'}`}>
              <Text className="text-white text-xl">{item.book}</Text>
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
    </SafeAreaView>
  );
};

export default BibleList;
