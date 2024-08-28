import * as FileSystem from 'expo-file-system';
import * as AV from 'expo-av'
import * as MediaLibrary from 'expo-media-library'
import * as Camera from 'expo-camera';
import { useState } from 'react';

const createFolder = async(folderName) => {
    try {
        const folderPath = `${FileSystem.documentDirectory}/${folderName}`;
        if(folderPath){
            console.log(`Folder created successfully: ${folderName}`);
            console.log(folderPath);
        }
        else {
            console.error(folderPath)
        }
    } catch (error) {
        console.error(error);
    }
}

export default createFolder;