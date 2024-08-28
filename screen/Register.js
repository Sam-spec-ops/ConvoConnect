import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import axios from 'axios'
const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [emailView, setEmailView] = useState(true);
    const [otpView, setOtpView] = useState(false);
    const [errormessage, setErrorMessage] = useState("");
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    useEffect(() => {
        setEmailView(true);
        setErrorMessage('');
        setOtpView(false);
    }, []);
    const emailVerification = async() => {
        const verifyEmail = EmailRegex.test(email);
        console.log(verifyEmail);
        if (!verifyEmail) {
            setErrorMessage("Enter a valid Email address");
            return;
        } else {
            try {
                const response = await axios.post('http://192.168.43.225:5000/verifyemail', {email:email});
                if(!response){
                    Alert.alert('Verification Failed');
                }
                else {
                    setEmailView(false)
                    setOtpView(true);
                    setErrorMessage("");
                }
            } catch(error){
                console.log('verification failed', error)
            }
        }
    };
    const handleverfication = async() => {
        if (emailView === true) {
            if (!email) {
                setErrorMessage("Enter your Email address");
                return;
            } else {
                emailVerification();
            }
        } else if (otpView === true) {
            if(!otp){
                setErrorMessage("Enter Verification code");
                return
            }
            else {
                const response = await axios.post('http://192.168.43.225:5000/verifyotp')
                if(!response){
                    setErrorMessage("Enter Verification code");
                    return
                }
                else {
                    Alert.alert('Verification Complete');
                    navigation.navigate('registration-form');
                }
            }
        }
    };
    return (
        <View className="bg-slate-800 flex justify-center items-center h-full w-full">
            <ExpoStatusBar />
            <Text className="mb-7 text-slate-300 text-2xl font-bold">Email Verification</Text>
            <Text className="sm text-red-500">{errormessage}</Text>
            {emailView && (
                <View className="block mb-5">
                    <Text className="text-slate-100 text-lg font-semibold">Email</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setEmail(text);
                        }}
                        placeholder="Enter your Email address"
                        keyboardType="email-address"
                        autoFocus={true}
                        placeholderTextColor={"ghostwhite"}
                        className="placeholder:text-slate-300 focus:placeholder:invisible w-72 text-slate-200 h-10 border-b-2 border-slate-400"
                    />
                </View>
            )}
            {otpView && (
                <View className="block mb-5">
                    <Text className="text-slate-100 text-lg font-semibold">Otp</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setOtp(text);
                        }}
                        placeholder="Enter the verification code sent to your email"
                        keyboardType="numeric"
                        maxLength={6}
                        autoFocus={true}
                        placeholderTextColor={"grey"}
                        className="placeholder:text-slate-300 focus:placeholder:invisible w-72 text-slate-200 h-10 border-b-2 border-slate-400"
                    />
                </View>
            )}
            <TouchableOpacity onPress={handleverfication} className="w-72 h-14 bg-red-500 flex justify-center items-center rounded-xl">
                <Text className="text-base">Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Login");
                }}
            >
                <Text className="text-slate-400 text-base mt-3">Already a user?  <Text className="text-red-500">Sign In</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;
