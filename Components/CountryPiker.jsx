// CountryCodePicker.js

import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const CountryCodePicker = ({ selectedValue, onValueChange, countryCodes }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCodeText}>{selectedValue || '+91'}</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countryCodes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  onValueChange(item);
                  setModalVisible(false);
                }}>
                  <Text style={styles.countryCodeItem}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CountryCodePicker;

const styles = StyleSheet.create({
  countryCodeContainer: {
    borderWidth: 2,
    borderColor: '#DD88CF',
    borderRadius: 10,
    padding: 10,
    marginRight: 5,
  },
  countryCodeText: {
    fontSize:18,
    color: '#4b164c',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  countryCodeItem: {
    paddingVertical: 8,
    fontSize: 16,
    color: '#4b164c',
  },
  closeButton: {
    paddingVertical: 12,
    color: 'white',
    marginTop:10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#4b164c',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
