import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import StorySection from '../Components/StorySection'
import ToggleButton from '../Components/ToggleButton'
import MakeFriend from './MakeFriend'
import SearchPartners from './SearchPartners'

const HomeScreen = () => {
    const [activeButton, setActiveButton] = useState('Make Friends');

    const handleButtonPress = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <SafeAreaView style={{backgroundColor:'#fdf7fd',flex:1}}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Header activeButton={activeButton}/>
                {
                    activeButton==='Make Friends' && <StorySection />
                }
                <ToggleButton activeButton={activeButton} onPress={handleButtonPress} />
                {activeButton && activeButton === 'Make Friends' && <MakeFriend />}
                {activeButton && activeButton === 'Search Partners' && <SearchPartners />}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})