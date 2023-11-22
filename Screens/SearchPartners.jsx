import React, { useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
const { width: wWidth, height } = Dimensions.get("window");

const SearchPartners = () => {
    const translateX = useSharedValue(0);
    const rotate = useSharedValue('0deg');
    const centerThreshold = 20; // Adjust this threshold as needed
    const SNAP_POINTS = [-wWidth, 0, wWidth]; // Define snap points
    const panGesture = useRef(
        Gesture.Pan()
            .onStart(() => {
                rotate.value = '0deg';
            })
            .onUpdate((e) => {
                translateX.value = e.translationX;

                // Calculate rotation based on distance from the center
                const distanceFromCenter = Math.abs(e.translationX);
                rotate.value = distanceFromCenter < centerThreshold ? '0deg' : e.translationX > 0 ? '3deg' : '-3deg';
            })
            .onEnd(({ velocityX, velocityY }) => {
                // Calculate snap points for translation
                const destX = snapPoint(translateX.value, velocityX, SNAP_POINTS);
                translateX.value = withSpring(destX, { velocity: velocityX });

                if (destX < -centerThreshold) {
                    // User swiped left (cross)
                    console.log("Cross");
                } else if (destX > centerThreshold) {
                    // User swiped right (like)
                    console.log("Like");
                }
                
                // Reset rotation
                rotate.value = '0deg';
            })
    ).current;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: rotate.value },
                { translateX: translateX.value },
            ]
        };
    });

    return (
        <View style={{ padding: 20 }}>
            <GestureDetector gesture={panGesture}>
                <View style={[styles.cardContainer]}>
                    <Animated.View style={[animatedStyle]}>
                        <Image source={require('../assets/Profile1.jpg')} style={styles.cardImage} />
                    </Animated.View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.shadowEffect]}>
                            <Entypo name="cross" size={34} color='#4b164c' style={{ backgroundColor: 'white', borderRadius: 100, padding: 15 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.shadowEffect]}>
                            <AntDesign name="star" size={34} color="white" style={{ backgroundColor: '#4b164c', borderRadius: 100, padding: 15 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.shadowEffect]}>
                            <AntDesign name="heart" size={34} color="white" style={{ backgroundColor: '#DD88CF', borderRadius: 100, padding: 15 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </GestureDetector>
        </View>
    );
};



const styles = StyleSheet.create({
    cardContainer: {
        padding: 15,
        width: '100%',
        height: 'auto',
        borderRadius: 30,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    cardImage: {
        width: '100%',
        height: 350,
        borderRadius: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    button: {
        marginTop: 20,
        borderRadius: 50,
    },
    shadowEffect: {
        ...Platform.select({
            ios: {
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 3,
            },
        }),
    }
});

export default SearchPartners;
