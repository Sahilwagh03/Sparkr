import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Profile1 from '../assets/Profile1.jpg'
import Profile2 from '../assets/Profile2.jpg'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{ flex:1.5, alignItems: 'center' ,backgroundColor:'white' }}>
                <Text style={[RegisterStyle.categoryText, {top:'30%', left:'25%'}]}>Music</Text>
                    <Text style={[RegisterStyle.categoryText, {bottom:'20%', right:'20%'}]}>Fashion</Text>
                    <View style={[RegisterStyle.profileImageContainer, {top:'45%' , left:'15%'}]}>
                        <Image source={Profile1} style={RegisterStyle.profileImage} />
                    </View>
                    <View style={[RegisterStyle.profileImageContainer, {top:'20%' , right:'10%'}, RegisterStyle.shadowEffect]}>
                        <Image source={Profile2} style={RegisterStyle.profileImage} />
                    </View>
                </View>
                <View style={RegisterStyle.contentContainer}>
                    <Text style={RegisterStyle.headerText}>Make friends with people like you</Text>
                    <Text style={RegisterStyle.paragraphText}>Interact with people who share the same interests as you</Text>
                    <TouchableOpacity style={[RegisterStyle.button, { backgroundColor: '#4b164c' }]} onPress={()=> navigation.navigate('SignUp')}><Text style={RegisterStyle.buttonText}>Continue</Text></TouchableOpacity>
                    <TouchableOpacity style={[RegisterStyle.button, { backgroundColor: '#fcf3fa' }]} onPress={()=> navigation.navigate('Tabs')}><Text style={[RegisterStyle.buttonText, { color: '#4b164c' }]}>Sign in</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen

const RegisterStyle = StyleSheet.create({
    contentContainer: {
        padding: 20,
        backgroundColor: 'white',
        flex:1
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraphText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#a29ea6',
        marginLeft: 20,
        marginRight: 20
    },
    button: {
        padding: 20,
        borderRadius: 40,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // Text color
        fontSize: 16,
        fontWeight: 'bold',
    },

    shadowEffect: {
        shadowColor: '#dd88cf',
        shadowOffset: {
            width: 5,
            height:5,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 100,
    },
    profileImageContainer: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 100, // make it a circle
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profileImage: {
        width: 120, 
        height: 120,
        borderRadius: 100,
    },
    categoryText: {
        position:'absolute',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 10,
        textAlign: 'center',
        padding: 10, // Add padding
        borderWidth: 2, // Add border
        borderRadius: 40, // Add border radius
        borderColor:'#e5a6db',
        color: '#4b164c', // Border color
    },
});
