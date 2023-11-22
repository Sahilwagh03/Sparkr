import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BackButton from '../Components/BackButton';
import Title from '../Components/Title';

const KnownFriends = () => {
    const userData = [
        { name: 'Sami' },
        { name: 'Rugved' },
        { name: 'Sakashi' },
    ];

    return (
        <View>
            <BackButton route='SignUp' />
            <View style={{ marginHorizontal: 30 }}>
                <Title title='Friends you may know' />

                {userData.map((user, index) => (
                    <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 }} key={index} >
                        <View style={{ gap: 10, padding: 20, width: 150, height: 150, backgroundColor: 'white', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
                            <Image source={require('../assets/Profile2.jpg')} style={{ width: '80%', height: '80%', borderRadius: 100 }} />
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>{user.name}</Text>
                        </View>
                        <View  style={{ gap: 10, padding: 20, width: 150, height: 150, backgroundColor: 'white', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
                            <Image source={require('../assets/Profile2.jpg')} style={{ width: '80%', height: '80%', borderRadius: 100 }} />
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>{user.name}</Text>
                        </View>
                    </View>
                ))}

            </View>
        </View>
    );
};

export default KnownFriends;

const styles = StyleSheet.create({});
