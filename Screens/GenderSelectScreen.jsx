import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../Components/BackButton';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Title from '../Components/Title';

const GenderSelectScreen = () => {
    const [selectedGender, setSelectedGender] = useState('');

    return (
        <View>
            <View>
                <BackButton route='SignUp'/>
                <View style={{ marginHorizontal: 30 }}>
                    <Title title='Select your gender?'/>
                    <View style={{ display: 'flex', gap: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableWithoutFeedback onPress={() => setSelectedGender('male')}>
                            <View style={[styles.iconContainer, selectedGender === 'male' && { borderColor: '#DD88CF' }]}>
                                {selectedGender === 'male' && (
                                    <AntDesign name="checkcircle" size={20} color="#DD88CF" style={{ position: 'absolute', right: '5%', top: '5%' }} />
                                )}
                                <View style={styles.iconWrapper}>
                                    <Foundation name="male-symbol" size={34} color="white" />
                                </View>
                                <Text style={styles.genderText}>Men</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => setSelectedGender('female')}>
                            <View style={[styles.iconContainer, selectedGender === 'female' && { borderColor: '#DD88CF' }]}>
                                {selectedGender === 'female' && (
                                    <AntDesign name="checkcircle" size={20} color="#DD88CF" style={{ position: 'absolute', right: '5%', top: '5%' }} />
                                )}
                                <View style={[styles.iconWrapper, { backgroundColor: '#DD88CF' }]}>
                                    <Foundation name="female-symbol" size={34} color="white" />
                                </View>
                                <Text style={styles.genderText}>Women</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default GenderSelectScreen;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '900',
        color: '#4b164c',
        marginTop: 30,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'transparent',
        position: 'relative', // Necessary for absolute positioning
    },
    iconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#4b164c',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    genderText: {
        color: '#4b164c',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
