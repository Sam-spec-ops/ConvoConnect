import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
const BiblePage = ({navigation})=>{
    
    const navigatetobible = ()=>{
        navigation.navigate('Bible')
    }
    return(
        <SafeAreaView className="flex h-full w-screen mt-6 bg-green-950 shadow-xl shadow-black justify-center items-center">
            <View className="flex gap-5">
                <TouchableOpacity onPress={navigatetobible} className="flex flex-row text-xl font-bold gap-3 items-center w-fit"><View className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600"><Icon name="arrow-right" size={28} color="#011"/></View><Text className="text-2xl text-orange-600 font-bold">Bible</Text></TouchableOpacity>                
                <TouchableOpacity onPress={()=>navigation.navigate("Study")} className="flex flex-row text-xl font-bold gap-3 items-center w-fit"><View className="flex items-center justify-center h-10 w-10 rounded-full bg-cyan-600"><Icon name="arrow-right" size={28} color="#011"/></View><Text className="text-cyan-400 text-2xl font-bold">Bible Study </Text></TouchableOpacity>                
                <TouchableOpacity className="flex flex-row text-xl font-bold gap-3 items-center w-fit"><View className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600"><Icon name="arrow-right" size={28} color="#011"/></View><Text className="text-orange-600 text-2xl font-bold">Daily Devotional</Text></TouchableOpacity>                
                <TouchableOpacity className="flex flex-row text-xl font-bold gap-3 items-center w-fit"><View className="flex items-center justify-center h-10 w-10 rounded-full bg-cyan-600"><Icon name="arrow-right" size={28} color="#011"/></View><Text className="text-cyan-400 text-2xl font-bold">Yearly Program</Text></TouchableOpacity>        
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Save')}  className="absolute top-3 bg-amber-600 h-8 w-8 flex justify-center items-center rounded-full right-4">
                <Icon name="star" size={25} color="#011" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default BiblePage;