import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import Profile1 from '../assets/Profile1.jpg';
import Profile2 from '../assets/Profile2.jpg';
import { AntDesign } from '@expo/vector-icons';
const StorySection = () => {
    const stories = [
        { id: 1, color: '#dd88cf', image: Profile1, text: 'Story 1', name: 'My Story', user: true },
        { id: 2, color: '#dd88cf', image: Profile2, text: 'Story 2', name: 'Jane' },
        { id: 5, color: '#dd88cf', image: Profile1, text: 'Story 5', name: 'Alice' },
        { id: 6, color: '#dd88cf', image: Profile2, text: 'Story 6', name: 'Bob' },
        { id: 7, color: '#dd88cf', image: Profile2, text: 'Story 7', name: 'Eva' },
        { id: 8, color: '#dd88cf', image: Profile2, text: 'Story 8', name: 'Alex' },
        // Add more stories as needed
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.storyContainer}>
            <View style={[styles.storyImageContainer, item.user ? { borderWidth: 0 } : { borderColor: item.color, borderWidth: 2.5 }]}>
                <Image source={item.image} style={styles.storyImage} />
                {
                    item.user &&
                    <>
                        <View style={{backgroundColor:'white', position: 'absolute', bottom: '4%', right: '4%',borderRadius:100}}>
                            <AntDesign name="pluscircle" size={18} color="#dd88cf" style={{ padding:2 }} />
                        </View>
                    </>
                }
            </View>
            <Text style={styles.storyText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={stories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    storyContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
    storyImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
        padding: 5,
    },
    storyText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600',
        color: '#4b164c',
    },
});

export default StorySection;
