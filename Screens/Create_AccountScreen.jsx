import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../Components/BackButton';
import CountryCodePicker from '../Components/CountryPiker';
import { useNavigation } from '@react-navigation/native';

const Create_AccountScreen = () => {
  const [number, onChangeNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const navigation = useNavigation()
  const handleRoute=(route)=>{
      navigation.navigate(route)
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{backgroundColor:'rgba(250, 237, 248,0.8)', flex:1}}>
        <BackButton route='SignUp'/>
        <View style={{ marginHorizontal: 30 ,flex:1}}>
          <Text style={styles.title}>Enter your number</Text>
          <View style={styles.inputContainer}>
            <CountryCodePicker
              selectedValue={selectedCountryCode}
              onValueChange={(itemValue) => setSelectedCountryCode(itemValue)}
              countryCodes={['+1', '+44', '+91', '+353', '+61']}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter Number"
              placeholderTextColor="#8e8e8e" // Set the color of the placeholder text
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity onPress={()=> handleRoute('Otp')} style={[styles.NumberButton, { backgroundColor: '#4b164c' }]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Create_AccountScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#DD88CF',
    borderWidth: 2,
    fontWeight:'700',
    fontSize:20
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
    color: '#4b164c',
    marginTop: 30,
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
