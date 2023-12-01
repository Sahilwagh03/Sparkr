import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../Components/BackButton'
import InterestCard from '../Components/InterestCard'
import { StatusBar } from 'expo-status-bar'

const InterestsScreen = () => {
    const interestsData = [
            { text: 'Photography', image: require('../assets/assets(4).jpg') },
            { text: 'Architecture', image: require('../assets/assets(5).jpg') },
            { text: 'Fashion', image: require('../assets/assets(6).jpg') },
            { text: 'Book', image: require('../assets/assets(7).jpg') },
            { text: 'Movie', image: require('../assets/assets(8).jpg') },
            { text: 'Language', image: require('../assets/assets(9).jpg') },
            { text: 'Write', image: require('../assets/assets(10).jpg') },
            { text: 'Nature', image: require('../assets/assets(11).jpg') },
            { text: 'Painting', image: require('../assets/assets(12).jpg') },
            { text: 'Football', image: require('../assets/assets(13).jpg') },
            { text: 'People', image: require('../assets/assets(14).jpg') },
            { text: 'Animals', image: require('../assets/assets(15).jpg') },
            { text: 'Gym & Fitness', image: require('../assets/assets(16).jpg') },
    ];


    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <StatusBar backgroundColor='white' />
            <ScrollView>
                <View>
                    <BackButton route='Discover' />
                    <View style={{ padding: 20 }}>
                        <Text style={styles.headerText}>Discover by Interests</Text>
                        <View style={{ paddingTop: 20 }}>
                            {
                                interestsData.map((interest, index) => (
                                    <InterestCard interest={interest.text} image={interest.image} key={index} />
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default InterestsScreen

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#22172a', // Your specified text color
    },
})