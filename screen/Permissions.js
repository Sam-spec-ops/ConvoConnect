import * as FileSystem from 'expo-file-system';
import * as AV from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
import * as Camera from 'expo-camera';
import { useState } from 'react';

const permissionsAsync = async () => {
    const { camera } = await Camera.Camera.requestCameraPermissionsAsync();
    const { microphone } = await Camera.Camera.requestMicrophonePermissionsAsync();
    const { audio } = await AV.Audio.requestPermissionsAsync();
    const { directory } = await FileSystem.readDirectoryAsync();
    const { library } = await MediaLibrary.requestPermissionsAsync();
}

export default permissionsAsync;