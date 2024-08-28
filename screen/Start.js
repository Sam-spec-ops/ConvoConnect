import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Database from './database';
import permissionsAsync from './Permissions';
const Start = ({navigation}) => {
    setTimeout(() => {
        permissionsAsync();
        navigation.navigate('Login')
    }, 3000);
    
    return (
        <View className="bg-sky-200 flex justify-center items-center h-full w-full">
            <Image source={require('../assets/msg.jpg')} resizeMode='contain' className="max-w-xs" />
            <Text className="text-sky-600 absolute bottom-5 text-center font-bold text-lg">Tesla</Text> 
        </View>
    );
};
export default Start;