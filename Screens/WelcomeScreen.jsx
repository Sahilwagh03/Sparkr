import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Logo from '../assets/Logo.png'
import { StatusBar } from 'expo-status-bar'
const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Register')
        }, 3000)
    }, [])

    return (
        <SafeAreaView style={welcomeStyles.container}>
            <StatusBar backgroundColor='#DD88cf'/>
            <View style={welcomeStyles.center}>
                <Image source={Logo} />
                <Text style={welcomeStyles.text}>Friendzy</Text>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#DD88CF'
    },
    center: {
        alignItems: 'center',
        display:'flex',
        flexDirection:'row',
        gap:10,
        justifyContent:'center'
    },
    text: {
        fontSize:40,
        color:'white',
        fontWeight:'900',
    }
})
