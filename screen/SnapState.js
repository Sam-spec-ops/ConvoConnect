import * as FileSystem from 'expo-file-system';
import * as AV from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
import * as Camera from 'expo-camera';
import { useState } from 'react';

const SnapState = async (cameraRef)=>{
    const photo = await cameraRef.current.takePictureAsync()
    console.log(photo)
    const {status} = await MediaLibrary.requestPermissionsAsync()
    if(status){
        const asset = await MediaLibrary.createAssetAsync(photo.uri)
        const {album} = await MediaLibrary.createAlbumAsync('Convo Connect', asset,{copyAsset:false})
        console.log(asset)
    }
}
export default SnapState