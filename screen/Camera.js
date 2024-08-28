import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { CameraView } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome6";
import { useState, useEffect, useRef } from "react";
import { CameraType, FaceDetectionResult, FlashMode } from "expo-camera/build/legacy/Camera.types";
import * as MediaLibrary from 'expo-media-library';
import SnapState from "./SnapState";
import recordVideo from "./recordVideo";
const Camera = ({ navigation }) => {
    const cameraRef = useRef(null) 
    const [facing, setFacing] = useState(CameraType.front);
    const [torch, setTorch] = useState(false);
    const toogleCameraFacing = () => {
        setFacing((current) => (current === "front" ? CameraType.back : CameraType.front));
        console.log(facing);
    };
    console.log(torch);
    const takePicture = async()=>{
        if(cameraRef && !video){
            SnapState(cameraRef)
        }
        else if(cameraRef && video){
           recordVideo(cameraRef)
        }
    }
    const [video,setVideo] = useState(false)
    return (
        <View className="h-full w-screen flex">
            <ExpoStatusBar />
            <CameraView className="flex-1" ref={cameraRef} facing={facing} flash={!torch ? FlashMode.off : FlashMode.torch} mode={`${!video ? 'picture' : 'video'}`}></CameraView>
            <View className="absolute w-screen bottom-5 px-5 flex flex-row justify-between">
                <TouchableOpacity className={`h-16 w-16 ${!video ? 'bg-red-600' : 'bg-blue-700'} flex justify-center items-center rounded-full`}>
                    <Icon onPress={()=>{!video ? setVideo(true) : setVideo(false)}} name={`${ !video ? 'video' : 'image' }`} size={30} color="gainsboro" />
                </TouchableOpacity>
                <TouchableOpacity onPress={takePicture} className={`h-16 w-16 ${!video ? 'bg-emerald-500' : 'bg-red-600'} flex justify-center items-center rounded-full`}>
                    <Icon name={`${ !video ? 'camera' : 'video' }`} size={30} color="gainsboro" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={toogleCameraFacing}
                    className="h-16 w-16 bg-zinc-700 flex justify-center items-center rounded-full"
                >
                    <Icon name="rotate" size={30} color="gainsboro" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Chats");
                }}
                className="h-12 w-12 flex justify-center items-center absolute left-3 top-5"
            >
                <Icon name="angle-left" color="gainsboro" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    !torch ? setTorch(true) : setTorch(false);
                }}
                className="h-12 w-12 flex justify-center items-center absolute right-5 top-5"
            >
                <Icon name="bolt" color={!torch ? "gainsboro" : "yellow"} size={30} />
            </TouchableOpacity>
        </View>
    );
};
export default Camera;
