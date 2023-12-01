import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../Components/BackButton';
import ProfileChatSnippet from '../Components/ProfileChatSnippet';
import { StatusBar } from 'expo-status-bar';

const ChatScreen = () => {

    const dummyUserData = [
        {
            id: 1,
            name: 'John Doe',
            message: 'Hey there! How are you?',
            profilePic: require('../assets/Profile1.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 2,
            name: 'Jane Smith',
            message: 'Just finished work, feeling tired.',
            profilePic: require('../assets/Profile2.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 3,
            name: 'Alice Johnson',
            message: 'Excited for the weekend plans!',
            profilePic: require('../assets/Profile3.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 4,
            name: 'Bob Anderson',
            message: 'How was your day?',
            profilePic: require('../assets/Profile4.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 5,
            name: 'Emily Davis',
            message: 'Remember to bring the documents tomorrow.',
            profilePic: require('../assets/Profile5.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 6,
            name: 'John Doe',
            message: 'Hey there! How are you?',
            profilePic: require('../assets/Profile1.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 7,
            name: 'Jane Smith',
            message: 'Just finished work, feeling tired.',
            profilePic: require('../assets/Profile2.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 8,
            name: 'Alice Johnson',
            message: 'Excited for the weekend plans!',
            profilePic: require('../assets/Profile3.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 9,
            name: 'Bob Anderson',
            message: 'How was your day?',
            profilePic: require('../assets/Profile4.jpg'), // Replace with the path to your profile picture
        },
        {
            id: 10,
            name: 'Emily Davis',
            message: 'Remember to bring the documents tomorrow.',
            profilePic: require('../assets/Profile5.jpg'), // Replace with the path to your profile picture
        },
    ];

    return (
        <SafeAreaView style={{ backgroundColor: '#4b164c', flex: 1 }}>
            <StatusBar backgroundColor='#4b164c' style='light'/>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <BackButton route='Home' color='white' />
                        </View>
                        <View style={{ flex: 100 }}>
                            <Text style={styles.headerText}>Message</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ padding: 20, fontSize: 20, fontWeight: '600', color: 'white' }}>Recent Matches</Text>
                        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 10 }} showsHorizontalScrollIndicator={false}>
                            <View style={{ width: 100, height: 100, marginLeft: 10 }}>
                                <Image source={require('../assets/Profile4.jpg')} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                            </View>
                            <View style={{ width: 100, height: 100, marginLeft: 10 }}>
                                <Image source={require('../assets/Profile2.jpg')} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                            </View>
                            <View style={{ width: 100, height: 100, marginLeft: 10 }}>
                                <Image source={require('../assets/Profile3.jpg')} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                            </View>
                            <View style={{ width: 100, height: 100, marginLeft: 10 }}>
                                <Image source={require('../assets/Profile5.jpg')} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                            </View>
                            <View style={{ width: 100, height: 100, marginLeft: 10 }}>
                                <Image source={require('../assets/Profile1.jpg')} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 30, borderTopLeftRadius: 30 ,borderTopRightRadius:30, paddingBottom:60}}>
                        <View style={{ padding: 20 }}>
                            {
                                dummyUserData.map((data) => (
                                    <View key={data.id}>
                                        <ProfileChatSnippet
                                            profilePic={data.profilePic}
                                            name={data.name}
                                            message={data.message}
                                        />
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChatScreen

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white', // Your specified text color
        textAlign: 'center',
        marginTop: 20
    },
})