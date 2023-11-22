import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnBoarding3 from '../assets/Onboarding_3.png'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
    const navigation = useNavigation()
    const handleButton= (route)=>{
        navigation.navigate(route)
    }
    return (
        <SafeAreaView>
            <View>
                <View style={{ height: '55%', alignItems: 'center', backgroundColor: 'white' }}>
                    <Image source={OnBoarding3} style={[styles.OnBoarding3Image]} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.headerText}>Let's meet new People around you</Text>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#4b164c'}]} onPress={()=>handleButton('Create_Account')}>
                        <View style={styles.IconContainer}>
                            <Feather name="phone-call" size={24} style={[styles.icons]} color="black" />
                        </View>
                        <Text style={styles.buttonText}>Login with Phone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fcf3fa' }]} >
                        <View style={styles.IconContainer}>
                            <FontAwesome name="google" size={24} color="black" />
                        </View>
                        <Text style={[styles.buttonText, { color: '#4b164c' }]}>Login with Google</Text>
                    </TouchableOpacity>
                    <Text style={styles.paragraphText}>Don't have an account? Sign Up</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        backgroundColor: 'white',
        height: '45%',
        display: 'flex',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        width: 300
    },
    paragraphText: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
        color: '#a29ea6',
        marginLeft: 20,
        marginRight: 20
    },
    button: {
        padding: 10,
        borderRadius: 40,
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 60,
    },
    buttonText: {
        color: '#fff', // Text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    OnBoarding3Image: {
        width: '100%',
        height: '100%',
        marginTop: 10
    },
    IconContainer: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 100,
        padding: 10,
        backgroundColor: 'white'
    },
    categoryText: {
        position: 'absolute',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 10,
        textAlign: 'center',
        padding: 10, // Add padding
        borderWidth: 2, // Add border
        borderRadius: 40, // Add border radius
        borderColor: '#e5a6db',
        color: '#4b164c', // Border color
    },
});