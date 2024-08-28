import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import axios from 'axios'
const Form = ({ navigation }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasDigit = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

    const formData = {
        username: username,
        name: name,
        password: password,
        email: email
    };
    const formEmail = { email:email }

    const authenticateUser = async () => {
        const validEmail = EmailRegex.test(email);
        const tstSpechar = hasSpecialChar.test(password);
        const tstDigit = hasDigit.test(password);
        const tstUpper = hasUpperCase.test(password);
        const tstLower = hasLowerCase.test(password);

        if (!name || !username || !email || !password || !confirmPassword) {
            setErrorMessage('All fields are required');
            return;
        }

        if (!validEmail) {
            setErrorMessage('Enter a valid email address');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }

        if (password.length < 8 || !(tstDigit && tstLower && tstSpechar && tstUpper)) {
            setErrorMessage('Password must contain Uppercase, Lowercase, Special Characters, a Digit, and be at least 8 characters long');
            return;
        }

        try {
            setErrorMessage('')
            const response = await axios.post('http://192.168.43.225:5000/insertuser', formData);
            console.log(response.data);
            if(!response){
                setErrorMessage('Registration Failed try again')
            }
            else {
                Alert.alert('Registration Complete');
                navigation.navigate('Chats');
            }
        } catch(error){
            console.log('Registration failed',error)
        }
    }
    return (
        <View className="bg-slate-800 flex justify-center items-center h-full w-full">
            <ExpoStatusBar />
            <Text className="mb-7 text-slate-300 text-2xl font-bold">Registration</Text>
            <Text className="sm text-red-500">{errorMessage}</Text>
                <View className="block mb-5">
                    <Text className="text-slate-100 text-lg font-semibold">Name</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setName(text);
                        }}
                        placeholder="Enter your Name"
                        keyboardType="default"
          
                        placeholderTextColor={"grey"}
                        className="placeholder:text-slate-300 focus:placeholder:invisible w-72 text-slate-200 h-10 border-b-2 border-slate-400"
                    />
                </View>
                <View className="block mb-5">
                    <Text className="text-slate-100 text-lg font-semibold">Username</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setUsername(text);
                        }}
                        placeholder="Enter your Username"
                        keyboardType="default"
          
                        placeholderTextColor={"grey"}
                        className="placeholder:text-slate-300 focus:placeholder:invisible w-72 text-slate-200 h-10 border-b-2 border-slate-400"
                    />
                </View>
                <View className="block mb-5">
                    <Text className="text-slate-100 text-lg font-semibold">Email</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setEmail(text);
                        }}
                        placeholder="Enter your Email address"
                        keyboardType="email-address"
    
                        placeholderTextColor={"grey"}
                        className="placeholder:text-slate-300 focus:placeholder:invisible w-72 text-slate-200 h-10 border-b-2 border-slate-400"
                    />
                </View>
                <View className="block mb-5">
                    <Text className="text-slate-100 text-lg font-semibold">Password</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setPassword(text);
                        }}
                        passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
                        textContentType="password"
                        secureTextEntry={false}
                        placeholder="Enter your Password"
                        keyboardType="default"
                        placeholderTextColor={"grey"}
                        className="placeholder:text-slate-300 focus:placeholder:invisible w-72 text-slate-200 h-10 border-b-2 border-slate-400"
                    />
                </View>
                <View className="block mb-5">
                    <Text className="text-slate-100 text-lg font-semibold">Confirm Password</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setConfirmPassword(text);
                        }}
                        passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
                        textContentType="password"
                        secureTextEntry={false}
                        placeholder="Confirm your Password"
                        keyboardType="default"
                        placeholderTextColor={"grey"}
                        className="placeholder:text-slate-300 focus:placeholder:invisible w-72 text-slate-200 h-10 border-b-2 border-slate-400"
                    />
                </View>
            <TouchableOpacity onPress={authenticateUser} className="w-72 h-14 bg-red-500 flex justify-center items-center rounded-xl">
                <Text className="text-base">Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Login");
                }}
            >
                <Text className="text-slate-400 text-base mt-3">Already a user? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Form;
