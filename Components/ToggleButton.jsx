import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ToggleButton = ({ activeButton, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeButton === 'Make Friends' && styles.activeButton]}
          onPress={() => onPress('Make Friends')}
        >
          <Text style={[styles.buttonText, activeButton === 'Make Friends' && styles.activeButtonText]}>Make Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton === 'Search Partners' && styles.activeButton]}
          onPress={() => onPress('Search Partners')}
        >
          <Text style={[styles.buttonText, activeButton === 'Search Partners' && styles.activeButtonText]}>Search Partners</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    gap: 5,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#f6e9f1',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeButtonText: {
    color: '#4b164c', // Adjust the color as needed
  },
});

export default ToggleButton;
