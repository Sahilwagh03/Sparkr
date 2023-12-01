import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const MAX_MESSAGE_LENGTH = 35; // Maximum character length for the message

const ProfileChatSnippet = ({ profilePic, name, message }) => {

  const navigation = useNavigation()
  // Function to truncate long messages
  const truncateMessage = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  const truncatedMessage = truncateMessage(message, MAX_MESSAGE_LENGTH);

  const handleCardClick = () => {
    navigation.navigate('ChatDetail', { profilePic, name, message })
  }
  return (
    <TouchableWithoutFeedback onPress={()=>handleCardClick()}>
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <Image source={profilePic} style={styles.profilePic} />
          <View style={styles.textInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.message}>{truncatedMessage}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileChatSnippet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#777',
  },
});
