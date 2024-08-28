import * as FileSystem from 'expo-file-system';
import * as AV from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
import * as Camera from 'expo-camera';
import { useState } from 'react';

const recordAudio2 = async () => {
    const [recording, setRecording] = useState(false);

    try {
        const audioRecording = await AV.Audio.Recording.createAsync();
        if(!recording){
            await audioRecording.recording.startAsync();
            setRecording(true);
            console.log(`Audio recording started`);
        }
        else {
            await audioRecording.recording.stopAndUnloadAsync();
            setRecording(false);
            console.log(`Audio recorded: ${audioRecording.recording.getURI()}`);
        }
    } catch(error){
        console.error(error);
    }
};

export default recordAudio2;