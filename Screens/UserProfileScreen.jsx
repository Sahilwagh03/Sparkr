import { View, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../Components/BackButton';
import BottomSheet from '../Components/BottomSheet';

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='white' />
      <View style={{ flex: 3 }}>
        <ImageBackground source={require('../assets/Profile3.jpg')} style={{ flex: 1 }} blurRadius={0.5}>
          <BackButton route='Tabs' color='white' />
          {/* Additional content */}
          <View style={styles.bottomContent}>
            <Text style={styles.nameAndAge}>John Doe, 30</Text>
            <Text style={styles.infoText}>USA</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Say Hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.buttonText}>Invite</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }} />
      <BottomSheet />
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = {
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 100,
  },
  nameAndAge: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
  },
  infoText: {
    fontSize: 18,
    color: 'white',
    fontWeight:'600'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 15,
    display:'flex',
    gap:20
  },
  button: {
    backgroundColor: '#dd88cf' , // Default button color
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
