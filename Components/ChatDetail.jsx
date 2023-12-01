import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import BackButton from './BackButton';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ChatDetail = () => {
    const [activeTab, setActiveTab] = useState('keyboard'); // State to manage active tab
    const [message, setMessage] = useState('');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // Handle logic when a tab is changed if needed
    };
    const handleInputChange = (text) => {
        setMessage(text);
        // You can perform additional logic here for input validation or other actions
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#4b164c' style='light' />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.header}>
                        <View>
                            <BackButton route='Chat' color='white' />
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Sahil Wagh</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Entypo
                                name="dots-three-horizontal"
                                size={24}
                                color="white"
                                style={styles.icon}
                            />
                        </View>
                    </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    {/* Add rest of your chat details or components here */}
                    {activeTab === 'keyboard' && (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Type a message..."
                                value={message}
                                onChangeText={handleInputChange}
                                multiline
                            />
                            {/* You can add a button or send functionality here */}
                        </View>
                    )}
                </ScrollView>
                {/* View at the bottom */}
                <View style={styles.bottomView}>
                    <View style={styles.bottomTabs}>
                        <TouchableOpacity
                            style={[
                                styles.tab,
                                activeTab === 'attachment' && { backgroundColor: '#dd88cf' },
                            ]}
                            onPress={() => handleTabChange('attachment')}
                        >
                            <Feather name="paperclip" size={32} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.tab,
                                activeTab === 'voice' && { backgroundColor: '#dd88cf' },
                            ]}
                            onPress={() => handleTabChange('voice')}
                        >
                            <MaterialIcons name="keyboard-voice" size={35} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.tab,
                                activeTab === 'keyboard' && { backgroundColor: '#dd88cf' },
                            ]}
                            onPress={() => handleTabChange('keyboard')}
                        >
                            <FontAwesome5 name="keyboard" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4b164c',
        flex: 1,
        position: 'relative',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100, // Adjust this value according to your bottom view's height
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    titleText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
        marginRight: 10
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    },
    bottomTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        alignItems: 'center'
    },
    tab: {
        padding: 10,
        borderRadius: 100
    },
    inputContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingBottom: 10,
        position: 'absolute',
        bottom: 75,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        elevation: 10, // For Android shadow effect
    },
    input: {
        minHeight: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
    },
});

export default ChatDetail;

