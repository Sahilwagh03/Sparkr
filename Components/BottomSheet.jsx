import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import IntrestCustomButton from './IntrestCustomButton';
import { Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = () => {
    const translateY = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
            translateY.value = ctx.startY + event.translationY;
            translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT / 1.5);
        },
        onEnd: () => {
            if (translateY.value > -SCREEN_HEIGHT / 3) {
                translateY.value = 0;
            } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                translateY.value = -SCREEN_HEIGHT + 50;
            }
        },
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.bottomContainer, rBottomSheetStyle]}>
                <View style={styles.line}></View>
                <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.smallTitle}>About</Text>
                        <Text style={styles.text}>
                            Some description or content here about the bottom sheet.
                        </Text>
                    </View>
                    <View style={[styles.titleContainer]}>
                        <Text style={styles.smallTitle}>Interest</Text>
                        <View style={styles.IntresetContainer}>
                            <IntrestCustomButton category='Football' icon={<Ionicons name="football" size={24} color="black" />} />
                            <IntrestCustomButton category='People' icon={<Ionicons name="people" size={24} color="#4169E1" />} />
                            <IntrestCustomButton category='Animals' icon={<FontAwesome5 name="dog" size={24} color="brown" />} />
                            <IntrestCustomButton category='Language' icon={<Entypo name="language" size={24} color="#FFA07A" />} />
                            <IntrestCustomButton category='Write' icon={<FontAwesome name="pencil-square-o" size={24} color="#32CD32" />} />
                        </View>
                    </View>
                    <View style={{ padding: 15,borderRadius:20, backgroundColor: '#fbf1f9', display: "flex", alignItems: 'center', flexDirection: 'row', gap: 30, justifyContent: 'center' }}>
                        <View style={{ display: "flex", alignItems: 'center'}}>
                            <Foundation name="male-symbol" size={40} color="white" style={{ padding: 10, paddingHorizontal: 16, backgroundColor: '#dd88cf', borderRadius: 100 }} />
                            <Text style={{ color: '#b59ab4', fontSize: 16 ,marginTop:10}}>Gender</Text>
                            <Text style={{ color: '#5b2a5c', fontSize: 22, fontWeight: '700' }}>Male</Text>
                        </View>
                        <View style={{ display: "flex", alignItems: 'center' }}>
                            <MaterialCommunityIcons name="calendar-month-outline" size={40} color="white" style={{ padding: 10, paddingHorizontal: 10, backgroundColor: '#dd88cf', borderRadius: 100 }} />
                            <Text style={{ color: '#b59ab4', fontSize: 16 ,marginTop:10}}>Age</Text>
                            <Text style={{ color: '#5b2a5c', fontSize: 22, fontWeight: '700' }}>20 year's old</Text>
                        </View>
                        <View style={{ display: "flex", alignItems: 'center' }}>
                            <Ionicons name="people" size={40} color="white" style={{ padding: 10, paddingHorizontal: 10, backgroundColor: '#dd88cf', borderRadius: 100 }} />
                            <Text style={{ color: '#b59ab4', fontSize: 16 ,marginTop:10}}>Friends</Text>
                            <Text style={{ color: '#5b2a5c', fontSize: 22, fontWeight: '700' }}>2.5k</Text>
                        </View>
                    </View>
                    {/* Additional content within the bottom sheet */}
                    <View style={styles.additionalContent}>
                        {/* Add your content here */}
                    </View>
                </View>
            </Animated.View>
        </PanGestureHandler>
    );
};

export default BottomSheet;

const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        height: SCREEN_HEIGHT,
        minHeight: 250,
        position: 'absolute',
        top: SCREEN_HEIGHT / 1.5,
        paddingHorizontal: 20,
    },
    line: {
        width: 60,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
    content: {
        flex: 1,
    },
    titleContainer: {
        marginBottom: 20,
    },
    smallTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        color: '#bab7bd'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#613362',
    },
    titleOfInterest: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    IntresetContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow items to wrap to the next line
        paddingVertical: 10,
        gap: 5
    },
    additionalContent: {
        // Styles for additional content within the bottom sheet
    },
});
