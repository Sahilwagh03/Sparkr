import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { Easing, withTiming, withSpring, useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, runOnJS } from 'react-native-reanimated';
import Profile2 from '../assets/Profile2.jpg'
const PostCard = ({ src, style }) => {
    const likeCount = 12; // Replace this with your actual like count
    const [isLiked, setIsLiked] = useState(false);
    const [isLikedIcon, setIsLikedIcon] = useState(false);
    const opacity = useSharedValue(0);

    const fadeIn = () => {
        opacity.value = withSpring(1, { stiffness: 80 });
    };

    const fadeOut = () => {
        opacity.value = withTiming(0, { duration: 1000 });
    };

    const handleDoubleTap = () => {
        setIsLikedIcon(!isLikedIcon);
        setIsLiked(!isLiked)
        fadeIn();
        setTimeout(() => {
            fadeOut();
            setIsLikedIcon(!isLikedIcon);
        }, 900);
    };

    const likeIconStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return (
        <View style={[styles.container, style]}>
            {/* Like Pop */}
            <Animated.View style={[styles.likeIconContainer, likeIconStyle]}>
                <AntDesign name="heart" size={64} color="#DD88CF" />
            </Animated.View>

            {/* Post Section */}
            <TouchableWithoutFeedback onPress={handleDoubleTap}>
                <Image style={styles.postImage} source={src.src} />
            </TouchableWithoutFeedback>

            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.profileImage} source={Profile2} />
                    <Text style={styles.profileName}>{src.name}</Text>
                </View>
                {/* Like Section */}
                <View style={styles.likeContainer}>
                    <TouchableOpacity onPress={() => {handleDoubleTap}}>
                        {isLiked ? (
                            <AntDesign name="heart" size={24} color="#DD88CF" />
                        ) : (
                            <AntDesign name="hearto" size={24} color="#DD88CF" />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.likeText}>{likeCount}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
        marginBottom: 20,
        height: 400,
        position: 'relative',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    postImage: {
        width: '100%',
        height: '100%',
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    likeText: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 5,
    },
    likeIconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }], // Adjust values based on the icon size
        zIndex: 90,
    },
});

export default PostCard;
