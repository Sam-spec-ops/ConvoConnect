import { Image,View,TextInput,ScrollView,Text,TouchableOpacity } from "react-native"
import { useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
const BibleApp = ({navigation})=>{
    const gotopage = ()=>{
        setTimeout(()=>{
            navigation.navigate("Page")
        },3000)
    }
    useEffect(()=>{
        gotopage()
    },[])
    return(
        <SafeAreaView>
            <Image resizeMode="contain" source={require('./Images/mybg.jpg')} className="w-screen h-full" />
        </SafeAreaView>
    )
}
export default BibleApp