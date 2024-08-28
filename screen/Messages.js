import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Clipboard,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import socket from "./Socket";
import Icon from "react-native-vector-icons/FontAwesome6";
import recordAudio from "./recordAudio2";
// import recordAudio2 from "./recordAudio2";
const Messages = ({ navigation }) => {
    const [totalMessages, setTotalMessages] = useState([]);
    const [senderMessages, setSenderMessages] = useState([]);
    const [recipientMessages, setRecipientMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        const messages = { senderMessages: senderMessages, recipientMessages: recipientMessages };
        setTotalMessages(messages);
    }, []);
    const sendMessage = () => {
        if (inputText !== "") {
            const msgTimeHour = new Date().getHours()
            const msgTimeMin = new Date().getMinutes()
            let newMsgTimeHour
            let newMsgTimeMin
            if(msgTimeHour < 10){
                newMsgTimeHour = '0'+msgTimeHour
            } else {
                newMsgTimeHour = msgTimeHour
            }
            if(msgTimeMin < 10){
                newMsgTimeMin = '0'+msgTimeMin
            } else {
                newMsgTimeMin = msgTimeMin
            }
            const msgTime = newMsgTimeHour + ':' + newMsgTimeMin
            const newMessage = { sender: "Me", text: inputText, recipient: 'Tesla', isGroup: false, msgTime:msgTime };
            const sendMsg = socket.emit('newMessage',newMessage)
            setSenderMessages((prevMessages) => [...prevMessages,newMessage])
            socket.on('serverMessage',(data)=>{
                console.log('received from server => ',data)
            })
        }
        setInputText("");
        console.log(totalMessages.senderMessages.map((item)=>(item.text)))
    };
    const scrollViewRef = useRef(null)
    useEffect(()=>{
        scrollViewRef.current.scrollToEnd({ animated: true})
    },[inputText])
    return (
        <View className="h-full w-full bg-slate-300 flex">
            <ExpoStatusBar />
            <View className="h-36 bg-blue-950 flex flex-row px-1 items-center">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Chats");
                    }}
                    className="h-10 w-10 rounded-full flex justify-center items-center mr-3"
                >
                    <Icon name="angle-left" size={30} color="gainsboro" />
                </TouchableOpacity>
                <TouchableOpacity className="w-fit h-fit bg-blue-300 px-1 py-1 rounded-full">
                    <Image source={require("./Images/image3.jpg")} resizeMode="contain" className="h-14 rounded-full w-14" />
                </TouchableOpacity>
                <View className="flex gap-1 flex-1 pl-2">
                    <View className="flex flex-row justify-between">
                        <Text className="text-lg font-bold text-slate-300">Samuel</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                        <Text className="text-sm text-slate-400">Last seen yesterday 15:14</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("VideoCall");
                    }}
                    className="rounded-full flex justify-center items-center mr-2"
                >
                    <Icon name="video" size={20} color="gainsboro" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("AudioCall");
                    }}
                    className="rounded-full flex justify-center items-center mr-1 ml-2"
                >
                    <Icon name="phone" size={20} color="gainsboro" />
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
            >
                <ScrollView ref={scrollViewRef} nestedScrollEnabled={true} keyboardDismissMode="interactive" className="flex-1 flex bg-slate-300 mb-4 -mt-5 rounded-t-3xl pt-5 px-3 ">
                    {senderMessages.map((item, index) => (
                        <TouchableOpacity
                            onLongPress={() => {
                                Clipboard.setString(item.text);
                            }}
                            key={index}
                            className={`py-2 px-5 h-fit flex flex-col space-y-1 items-end bg-slate-200 max-w-[250px] rounded-3xl mb-7 ${
                                index % 2 ? "self-start" : "self-end"
                            }
                        }`}
                        >
                            <Text className="flex-wrap flex max-w-full">{item.text}</Text>
                            <Text className="text-[9px]">{item.msgTime}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View className="flex flex-row w-full h-14 items-center pl-2">
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Camera");
                        }}
                        className="h-8 z-10 ml-3 w-8 absolute rounded-full flex justify-center items-center"
                    >
                        <Icon name="camera" size={25} color="#b1b1b1" />
                    </TouchableOpacity>
                    <TextInput
                        value={inputText}
                        onChangeText={(text) => {
                            setInputText(text);
                        }}
                        onFocus={() => {
                            setIsTyping(true);
                        }}
                        autoCorrect={true}
                        className="flex-1 h-12 px-2 pl-10 rounded-3xl bg-slate-200"
                    />
                    { isTyping ? (
                        <TouchableOpacity onPress={sendMessage} className="w-12 h-12 flex justify-center items-center bg-blue-950 rounded-full">
                            <Icon color="gainsboro" size={20} name="paper-plane" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={recordAudio} className="w-12 h-12 flex justify-center items-center bg-blue-950 rounded-full">
                            <Icon color="gainsboro" size={20} name="microphone" />
                        </TouchableOpacity>
                    ) }
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Messages;
