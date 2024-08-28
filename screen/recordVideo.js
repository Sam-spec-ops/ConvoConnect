import * as FileSystem from 'expo-file-system';
import * as AV from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
import * as Camera from 'expo-camera';
import { useState } from 'react';

const recordVideo = async (cameraRef) => {
    const [recording, setRecording] = useState(false);
    try {
        const camera = cameraRef.current
        if(!recording){
            await camera.recordAsync();
            setRecording(true);
            console.log(`Video recording started`);
        }
        else {
            await camera.stopRecording();
            setRecording(false);
            console.log(`Video recording stopped`);
        }
    } catch(error){
        console.error(error);
    }
}

export default recordVideo;