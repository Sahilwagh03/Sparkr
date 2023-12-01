import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import Header from '../Components/Header';
import UserProfileCard from '../Components/UserProfileCard';
import Profile1 from '../assets/Profile1.jpg'
import Profile2 from '../assets/Profile2.jpg'
import Profile3 from '../assets/Profile3.jpg'
import Profile4 from '../assets/Profile4.jpg'
import Profile5 from '../assets/Profile5.jpg'
import IntrestCustomButton from '../Components/IntrestCustomButton';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import ToggleSwitch from 'toggle-switch-react-native'
import { useNavigation } from '@react-navigation/native';
const DiscoverScreen = () => {
    const navigation = useNavigation()
    const [toggle, setToggle] = useState(false)
    const [toggleSearch, settoggleSearch] = useState(false)
    const userData = [
        {
            userName: 'Sahil',
            age: '21',
            photo: Profile4
        },
        {
            userName: 'Om',
            age: '19',
            photo: Profile3
        },
        {
            userName: 'Sakashi',
            age: '21',
            photo: Profile1
        },
        {
            userName: 'Rohan',
            age: '18',
            photo: Profile2
        },
        {
            userName: 'Rohan',
            age: '22',
            photo: Profile5
        },
    ]

    const [preferences, setPreferences] = useState({
        MakeFriend: false,
        Dating: false
    })

    const [distance, setDistance] = useState(20)
    const [age, setAge] = useState(20)
    const [online, setOnline] = useState(false)

    const handleApply = () => {
        setToggle(false)
    }

    const handleReset = () => {
        setDistance(20); // Reset distance
        setAge(20); // Reset age
        setOnline(false); // Reset online status
        setPreferences({ MakeFriend: false, Dating: false }); // Reset preferences
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <StatusBar backgroundColor='#ffffff' />
            <ScrollView>
                <View>
                    <Header activeButton={'Discover'}
                        onClickFilter={(toggle) => setToggle(toggle)} filter={toggle}
                        onClickSearch={(toggle) => settoggleSearch(toggle)} search={toggleSearch}
                    />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 20, paddingVertical: 30 }}>
                        {
                            userData.map((data, index) => (
                                <UserProfileCard key={index} userName={data.userName} age={data.age} photo={data.photo} />
                            ))
                        }
                    </ScrollView>
                    <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.interestHeading}>Interest</Text>
                        <TouchableWithoutFeedback onPress={()=> navigation.navigate('Interests')}>
                            <Text style={styles.viewAll}>View all</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 20, paddingVertical: 10 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                <IntrestCustomButton category='Gaming' icon={<Ionicons name="md-game-controller" size={24} color="skyblue" />} />
                                <IntrestCustomButton category='Dancing' icon={<MaterialCommunityIcons name="dance-ballroom" size={24} color="#FF69B4" />} />
                                <IntrestCustomButton category='Music' icon={<Ionicons name="musical-notes" size={24} color="#BA55D3" />} />
                                <IntrestCustomButton category='Photography' icon={<FontAwesome name="camera-retro" size={24} color="#00CED1" />} />
                                <IntrestCustomButton category='Architecture' icon={<FontAwesome name="building" size={24} color="#8A2BE2" />} />
                                <IntrestCustomButton category='Fashion' icon={<Ionicons name="woman-sharp" size={24} color="#20B2AA" />} />
                                <IntrestCustomButton category='Book' icon={<SimpleLineIcons name="notebook" size={24} color="#4682B4" />} />
                                <IntrestCustomButton category='Movie' icon={<MaterialCommunityIcons name="movie-open" size={24} color="#FFD700" />} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                <IntrestCustomButton category='Language' icon={<Entypo name="language" size={24} color="#FFA07A" />} />
                                <IntrestCustomButton category='Write' icon={<FontAwesome name="pencil-square-o" size={24} color="#32CD32" />} />
                                <IntrestCustomButton category='Nature' icon={<MaterialIcons name="nature" size={24} color="#3CB371" />} />
                                <IntrestCustomButton category='Painting' icon={<FontAwesome name="paint-brush" size={24} color="#800080" />} />
                                <IntrestCustomButton category='Football' icon={<Ionicons name="football" size={24} color="black" />} />
                                <IntrestCustomButton category='People' icon={<Ionicons name="people" size={24} color="#4169E1" />} />
                                <IntrestCustomButton category='Animals' icon={<FontAwesome5 name="dog" size={24} color="brown" />} />
                                <IntrestCustomButton category='Gym & Fitness' icon={<MaterialCommunityIcons name="arm-flex" size={24} color="#e6df15" />} />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ paddingVertical: 20, paddingBottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 350, height: 350 }}>
                            <Image source={require('../assets/Map.png')} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }} />
                        </View>
                    </View>
                    {
                        toggle &&
                        (
                            <View style={styles.container}>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={toggle}
                                    onRequestClose={() => setToggle(false)}
                                >
                                    <View style={styles.modalContainer}>
                                        <View style={styles.modalContent}>
                                            <View style={styles.line}></View>
                                            <View >
                                                <Text style={[styles.interestHeading, { textAlign: 'center' }]}>Filters</Text>
                                            </View>

                                            <View>
                                                <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#f3f2f4', borderBottomWidth: 2 }}>
                                                    <Text style={{
                                                        color: '#3c3243',
                                                        fontWeight: 'bold',
                                                        fontSize: 20
                                                    }}>Location</Text>
                                                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', gap: 8 }}>
                                                        <Text style={{ color: 'gray', fontSize: 16, fontWeight: '600' }}>People nearby</Text>
                                                        <MaterialIcons name="keyboard-arrow-right" size={28} color='gray' style={{ fontWeight: '600' }} />
                                                    </View>
                                                </View>
                                                <View>
                                                    <View style={{ paddingVertical: 20, borderBottomColor: '#f3f2f4', borderBottomWidth: 2 }}>
                                                        <Text style={{
                                                            color: '#3c3243',
                                                            fontWeight: 'bold',
                                                            fontSize: 20
                                                        }}>Prferences</Text>
                                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, paddingTop: 20 }}>
                                                            <TouchableOpacity onPress={() => setPreferences({ ...preferences, MakeFriend: true, Dating: false })}>
                                                                <View style={{ borderColor: preferences.MakeFriend ? '#dd88cf' : '#f3f2f4', backgroundColor: preferences.MakeFriend ? '#dd88cf' : 'transparent', width: 25, height: 25, borderWidth: 2, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                                                                    {preferences.MakeFriend && <AntDesign name="check" size={20} color="white" />}
                                                                </View>
                                                            </TouchableOpacity>
                                                            <Text style={{ color: '#a9aeb7', fontWeight: '600', fontSize: 18, marginRight: 20 }}>Make Friends</Text>

                                                            <TouchableOpacity onPress={() => setPreferences({ ...preferences, MakeFriend: false, Dating: true })}>
                                                                <View style={{ borderColor: preferences.Dating ? '#dd88cf' : '#f3f2f4', backgroundColor: preferences.Dating ? '#dd88cf' : 'transparent', width: 25, height: 25, borderWidth: 2, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                                                                    {preferences.Dating && <AntDesign name="check" size={20} color="white" />}
                                                                </View>
                                                            </TouchableOpacity>
                                                            <Text style={{ color: '#a9aeb7', fontWeight: '600', fontSize: 18 }}>Dating</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View>
                                                    <View style={{ paddingVertical: 20, borderBottomColor: '#f3f2f4', borderBottomWidth: 2 }}>
                                                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                            <View>
                                                                <Text style={{
                                                                    color: '#3c3243',
                                                                    fontWeight: 'bold',
                                                                    fontSize: 20
                                                                }}>Distance</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{ fontSize: 16, fontWeight: '600', color: '#dd88cf' }}>{distance + 'Km'}</Text>
                                                            </View>
                                                        </View>
                                                        <Slider
                                                            style={{ width: '100%', height: 40, marginTop: 10 }}
                                                            minimumValue={0}
                                                            maximumValue={1}
                                                            value={(distance / 100)}
                                                            minimumTrackTintColor="#DD88CF"
                                                            maximumTrackTintColor="#000000"
                                                            thumbTintColor="#DD88CF"
                                                            onValueChange={value => setDistance(parseInt(value * 100))}
                                                        />
                                                    </View>
                                                </View>
                                                <View>
                                                    <View style={{ paddingVertical: 20, borderBottomColor: '#f3f2f4', borderBottomWidth: 2 }}>
                                                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                            <View>
                                                                <Text style={{
                                                                    color: '#3c3243',
                                                                    fontWeight: 'bold',
                                                                    fontSize: 20
                                                                }}>Age</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{ fontSize: 16, fontWeight: '600', color: '#dd88cf' }}>{age}</Text>
                                                            </View>
                                                        </View>
                                                        <Slider
                                                            style={{ width: '100%', height: 40, marginTop: 10 }}
                                                            minimumValue={0}
                                                            maximumValue={0.5}
                                                            value={(age / 100)}
                                                            minimumTrackTintColor="#DD88CF"
                                                            maximumTrackTintColor="#000000"
                                                            thumbTintColor="#DD88CF"
                                                            onValueChange={value => setAge(parseInt(value * 100))}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={{ paddingVertical: 20, borderBottomColor: '#f3f2f4', borderBottomWidth: 2 }}>
                                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <Text style={{
                                                            color: '#3c3243',
                                                            fontWeight: 'bold',
                                                            fontSize: 20
                                                        }}>Online Now</Text>
                                                        <ToggleSwitch
                                                            isOn={online}
                                                            onColor="#dd88cf"
                                                            offColor="#f3f2f4"
                                                            size="large"
                                                            onToggle={isOn => setOnline(isOn)}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={{ paddingVertical: 20, paddingBottom: 0 }}>
                                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                                        <TouchableOpacity style={[styles.NumberButton, { backgroundColor: '#f3f2f4' }]} onPress={handleReset}>
                                                            <Text style={[styles.buttonText, { color: '#acb0b9' }]}>Reset</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={styles.NumberButton} onPress={handleApply}>
                                                            <Text style={styles.buttonText}>Apply</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DiscoverScreen

const styles = StyleSheet.create({
    interestHeading: {
        color: '#3c3243',
        fontWeight: 'bold',
        fontSize: 26
    },
    viewAll: {
        color: '#dd88ef',
        fontWeight: '600',
        fontSize: 18
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    thumbBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    thumbText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 18,
    },
    NumberButton: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#4b164c',
        width: 160, // Adjust the width as needed
        height: 60, // Adjust the height as needed
        justifyContent: 'center', // Align the text vertically
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    line: {
        width: 60,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginBottom: 5,
        borderRadius: 2,
    },
})