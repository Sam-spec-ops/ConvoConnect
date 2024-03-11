import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import books from './JSON/Bibleverse.json';
import Biblelist from './JSON/Biblelist.json';

const BibleChapter = ({ navigation, route }) => {
    const { params } = route;
    const book = params?.book;
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const [nochapters, setnochapters] = useState("");
    const [getarraychap, setgetarraycap] = useState([]);
    const [getvalue, setgetvalue] = useState("");
    const [mychapter, setmychapter] = useState("");
    const [searchdata, setsearchdata] = useState("");
    const [myverse, setmyverse] = useState("");
    const [searchverse, setgetverse] = useState("");
    const [message, setmessage] = useState("e.g 12vs1");

    const getmydata = () => {
        const data = Biblelist.books.filter((item) => (
            item.book === book
        ));
        const getchapter = data[0].chapters;
        let array = [];
        for (let index = 1; index <= getchapter; index++) {
            array.push(index);
        }
        setnochapters(getchapter);
        setgetarraycap(array);
    };

    useEffect(() => {
        getmydata();
    }, []);

    useEffect(() => {
        const index = Biblelist.books.findIndex(item => item.book === book);
        setCurrentBookIndex(index);
    }, [book]);

    const handleLeftArrowClick = () => {
        if (currentBookIndex!==0) {
            const newIndex = (currentBookIndex === Biblelist.books.length - 1) ? 0 : currentBookIndex - 1;
            setCurrentBookIndex(newIndex)
            const book = Biblelist.books[newIndex].book
            navigation.navigate("Chapter",{book:book})
            const data = Biblelist.books.filter((item)=>(
                item.book===book
            ))
            const getchapter=data[0].chapters
            let array = []
            for(let index = 1; index<=getchapter; index++){
                array.push(index)
            }
            setnochapters(getchapter)
            setgetarraycap(array)
        }
        
    };

    const handleRightArrowClick = () => {
        if(currentBookIndex===65){
            return
        }
        if (currentBookIndex!==63) {
            const newIndex = (currentBookIndex === Biblelist.books.length - 1) ? 0 : currentBookIndex + 1;
            setCurrentBookIndex(newIndex)
            const book = Biblelist.books[newIndex].book
            navigation.navigate("Chapter",{book:book})
            const data = Biblelist.books.filter((item)=>(
                item.book===book
            ))
            const getchapter=data[0].chapters
            let array = []
            for(let index = 1; index<=getchapter; index++){
                array.push(index)
            }
            setnochapters(getchapter)
            setgetarraycap(array)
        }
    };

    const setverse = () => {
        const searchdata = getvalue.split("vs");
        setsearchdata(searchdata);
        const mychapter = searchdata[0];
            setmychapter(mychapter);
            const myverse = searchdata[1];
            setmyverse(myverse);
            
            const getChapter = books.books.find(b => b.book === book);
            const totalChapters = getChapter.chapters.length;
            if (mychapter > totalChapters) {
                setmessage("Chapter does not exist");
                return;
            } else {
                const getVerse = getChapter.chapters.filter(b => b.chapter === mychapter);
                setgetverse(getVerse);
            }
    };

    useEffect(() => {
        setverse();
    }, [getvalue]);

    const startsearch = () => {
        if(searchdata.length>1){
            const getChapter = books.books.find(b => b.book === book);
        const totalChapters = getChapter.chapters.length;
        if (mychapter > totalChapters) {
            setmessage("Chapter does not exist");
            return;
        } else {
            const getVerse = getChapter.chapters.filter(b => b.chapter === mychapter);
            setgetverse(getVerse);
        }
        const totalVerse = searchverse[0].verses.length;
        if (searchdata.length > 1) {
            if (!isNaN(mychapter)) {
                if (mychapter > nochapters) {
                    setmessage("Chapter does not exist");
                    return;
                } else {
                    if (!isNaN(myverse)) {
                        if (myverse <= totalVerse) {
                            navigation.navigate("Search",{book:book,chapter:mychapter,verse:myverse})
                        } else {
                            setmessage("Verse does not exist");
                        }
                    } else {
                        setmessage("Invalid Verse");
                    }
                }
            } else {
                setmessage("Invalid Chapter");
            }
        } else {
            setmessage("Enter search in format 12vs1");
        }
        }
        else {
            setmessage("Enter search in format 12vs1")
        }
    };

    return (
        <SafeAreaView className="flex justify-center h-full w-screen bg-slate-100">
            <View className="flex justify-center h-fit pb-5 items-center w-screen">
                <View className="flex flex-row w-screen justify-center gap-4 items-center">
                    <TouchableOpacity className="bg-amber-600 flex justify-center items-center rounded-full h-10 w-10" onPress={handleLeftArrowClick}><Icon name="arrow-left" size={27} color="#fff" /></TouchableOpacity>
                    <Text className="text-3xl font-bold">{book}</Text>
                    <TouchableOpacity className="bg-green-950 flex justify-center items-center rounded-full h-10 w-10" onPress={handleRightArrowClick}><Icon name="arrow-right" size={27} color="#f7fafc" /></TouchableOpacity>
                </View>
                <View>
                    <View className="flex flex-row gap-1 pl-3 text-3xl justify-start w-screen items-center font-normal">
                        <Image resizeMode="contain" className="w-12 h-12" source={require('./Images/download (1).png')} />
                        <Text className="text-2xl">List Of Books</Text>
                    </View>
                    <Text className="text-red-600 pl-7">{message}</Text>
                </View>
                
                <View className="flex flex-row gap-1">
                    <TextInput onChangeText={(value)=>setgetvalue(value)} placeholder={`Search in ${book} for chapter and verse`} className="border pl-1 outline-0 bg-slate-100 text-black h-10 rounded-lg w-64 border-black" />
                    <TouchableOpacity className="bg-orange-600 h-13 flex justify-center items-center rounded-lg w-14" onPress={startsearch}>
                        <View onPress={startsearch} className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                            <Icon name="arrow-right" size={15} color="#f00000" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className="flex-1 w-screen">
                <View className="flex justify-center items-center w-screen py-5">
                    <View className="flex flex-row flex-wrap justify-center items-center px-2 py-3 gap-4 w-72">
                    {getarraychap.map((item, index) => (
                        <TouchableOpacity onPress={()=>navigation.navigate("Verse",{book:book,chapter:item})} key={index} className={`rounded-2xl h-12 w-12 py-1 flex justify-center text-2xl items-center ${index % 2 === 0 ? 'bg-amber-500' : 'bg-green-950'} text-white`}>
                            <Text className="text-white text-xl">{item}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>
            </ScrollView>
            <View><Text className="text-center text-xl font-normal">{nochapters} Chapters</Text></View>
            <View className="h-24 w-screen flex flex-row bg-green-950 py-5 px-3 justify-between">
                <TouchableOpacity onPress={() => navigation.navigate("Bible")} className="h-12 w-12 rounded-full bg-amber-500 flex justify-center items-center">
                    <Icon name="arrow-left" size={37} color="#011" />
                </TouchableOpacity>
                <Icon onPress={() => navigation.navigate("Page")} name="home" color="orange" size={60} />
            </View>
        </SafeAreaView>
    );
};

export default BibleChapter;
