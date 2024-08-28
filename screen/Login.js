import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert, Vibration, ActivityIndicator, TextInput } from "react-native";
import * as Authenticate from "expo-local-authentication";
import Icon from "react-native-vector-icons/FontAwesome6";
import Database from "./database";
import RequestServer from "./Api/Requests";
import createFolder from './MediaFunc';
const Login = ({ navigation }) => {
    useEffect(()=>{
        Database();
        createFolder('Convo Connect')
    })
    const [preloader, setPreloader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    const [isManual, setIsManual] = useState(false);
    const [email, setEmail] = useState("");
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasDigit = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

    const formData = {
        password: password,
        email: email,
    };
    const handleLogin = async () => {
        setPreloader(true);
        const status = await Authenticate.authenticateAsync();
        if (status.success) {
            setErrorMessage("Login successful");
            navigation.navigate("Chats");
        } else {
            setErrorMessage("Login unsuccessful");
            setPreloader(false);
            return;
        }
    };
    useEffect(() => {
        handleLogin();
        setPreloader(false);
        setErrorMessage('');
    }, []);

    const authenticateUser = async () => {
        const validEmail = EmailRegex.test(email);
        const tstSpechar = hasSpecialChar.test(password);
        const tstDigit = hasDigit.test(password);
        const tstUpper = hasUpperCase.test(password);
        const tstLower = hasLowerCase.test(password);

        if (!email || !password) {
            setErrorMessage("All fields are required");
            return;
        }

        if (!validEmail) {
            setErrorMessage("Enter a valid email address");
            return;
        }

        if (password.length < 8 || !(tstDigit && tstLower && tstSpechar && tstUpper)) {
            setErrorMessage("Password must contain Uppercase, Lowercase, Special Characters, a Digit, and be at least 8 characters long");
            return;
        }

        try {
            const route = "http://192.168.43.41:4000/login";
            setErrorMessage("");
            RequestServer(formData, route);
        } catch (error) {
            console.log("Registration failed", error);
        }
    };

    return (
        <View className="bg-slate-900 h-full w-full flex items-center justify-center">
            <ExpoStatusBar />
            <Icon name="fingerprint" size={110} color="rgb(148 163 184)" />
            {/* <Image resizeMode="contain" source={require("./Images/images.jpg")} className="max-w-xs" /> */}
            <Text className="text-xl font-bold text-slate-300 mb-3 mt-3">Sign in with Touch ID</Text>
            <Text className="text-slate-400 text-sm">Use your touch ID for faster</Text>
            <Text className="text-slate-400 text-sm">Easier access to your account</Text>
            <TouchableOpacity className="w-64 h-14 bg-red-500 mt-9 flex justify-center items-center rounded-xl">
                <Text className="text-base">Login with Touch ID</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Register");
                }}
            >
                <Text className="text-slate-400 text-base mt-3">
                    New user? <Text className="text-red-500">Sign up</Text>
                </Text>
            </TouchableOpacity>
            {preloader && (
                <View className="mt-5 space-y-3">
                    <ActivityIndicator color={`rgb(239 68 68)`} size={40} />
                </View>
            )}
            <Text className="text-red-500 text-base mt-3">{errorMessage}</Text>
            {isManual && (
                <View className="flex space-y-5">
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
                    <TouchableOpacity
                        onPress={authenticateUser}
                        className="w-72 h-14 bg-red-500 flex justify-center items-center rounded-xl"
                    >
                        <Text className="text-base">Submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default Login;
