import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../Components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([...Array(4)].map(() => React.createRef()));
  const navigation = useNavigation();

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    const correctOtp = '1234'; // Replace with your correct OTP
    if (enteredOtp === correctOtp) {
      setIsVerified(true);
    } else {
      Alert.alert('Verification Failed', 'Entered OTP is incorrect');
    }
  };

  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const resetOtp = () => {
    setOtp(['', '', '', '']);
    setIsVerified(false);
  };

  const circlePadding = useSharedValue(0)
  if (isVerified) {
    circlePadding.value = 0;
    setTimeout(() => circlePadding.value = withSpring(circlePadding.value + 30), 200)
  }

  const handleRoute = (route) => {
    resetOtp();
    navigation.replace(route);
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ backgroundColor: 'rgba(250, 237, 248,0.8)',flex:1 }}>
        <BackButton route={'Create_Account'} />
        <View style={styles.container}>
          <Text style={styles.title}>Enter 4-digits code</Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[styles.otpBox, {
                  borderColor: digit ? '#DD88CF' : 'transparent', // Change border color based on digit presence
                },]}
                value={digit}
                onChangeText={(text) => {
                  const newOtp = [...otp];
                  newOtp[index] = text;
                  setOtp(newOtp);
                  if (text !== '' && index < inputRefs.current.length - 1) {
                    focusNextInput(index);
                  }
                }}
                maxLength={1}
                keyboardType="numeric"
              />
            ))}
          </View>
          <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={isVerified}
            onRequestClose={() => {
              resetOtp();
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Animated.View style={{ padding: circlePadding, backgroundColor: '#faedf8', borderRadius: 100 }}>
                  <AntDesign name="checkcircle" size={90} color="#DD88CF" />
                </Animated.View>
                <Text style={styles.modalText}>You'r Verified</Text>
                <Text style={styles.paragraphText}>Your account is verified,let's start make friends</Text>
                <TouchableOpacity onPress={() => handleRoute('UserInfo')} style={[styles.NumberButton, { backgroundColor: '#4b164c' }]}><Text style={styles.buttonText}>Get started</Text></TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flex:1
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
    color: '#4b164c',
    marginTop: 30,
    paddingBottom: 30
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom:40
  },
  otpBox: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#DD88CF',
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
  },
  verifyButton: {
    padding: 20,
    borderRadius: 40,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#4b164c',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  NumberButton: {
    padding: 20,
    borderRadius: 40,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#4b164c',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 30,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 30
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    color: '#4b164c',
  },
  modalButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#4b164c',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#a29ea6',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OtpScreen;
