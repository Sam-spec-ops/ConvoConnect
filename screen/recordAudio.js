import React, { useEffect, useState } from 'react'
import * as FileSystem from 'expo-file-system';
import * as AV from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
const recordAudio = async () => {
    await AV.Audio.requestPermissionsAsync()
    try {
        const recording = new AV.Audio.Recording();
        await recording.prepareToRecordAsync(
            AV.Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        await recording.startAsync();
        setTimeout(async() => {
            await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            console.log('Recording uri at: ',uri)
            const {status} = await MediaLibrary.requestPermissionsAsync()
            if(status){
                const asset = await MediaLibrary.createAssetAsync(uri)
                console.log(asset)
                const {album} = await MediaLibrary.createAlbumAsync('Convo Connect', asset,{copyAsset:false})
                console.log(album)
            }
        }, 10000);
    } catch (error) {
        console.error('error',error);
    }
};

export default recordAudio;