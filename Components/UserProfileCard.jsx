import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UserProfileCard = ({ userName, age, photo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={photo} style={styles.image} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>
                        {userName}, {age}
                    </Text>
                    <View style={styles.distance}>
                        <Text style={styles.distanceText}>4.5 Km</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UserProfileCard;

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        alignItems: 'center',
    },
    card: {
        width: 150,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    userInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
    userName: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    distance: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#dd88ef',
        width: 80,
        alignSelf: 'center',
        backgroundColor: '#4b164c',
    },
    distanceText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
});
