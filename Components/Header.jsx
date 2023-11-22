import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Profile1 from '../assets/Profile1.jpg'
const Header = ({ activeButton }) => {
  return (
    <View style={[styles.headerContainer]}>
      {
        activeButton === 'Search Partners' ?
          <>
            <Image source={Profile1} style={styles.storyImage} />
            <View style={{display:'flex', alignItems:'center', flexDirection:'row', gap:10}}>
              <MaterialCommunityIcons name="heart-multiple-outline" size={28} color="black" style={{ padding: 5, borderRadius: 100, borderWidth: 2, textAlign: 'center' }} />
              <AntDesign name="bars" size={28} color="black" style={{ padding: 5, borderRadius: 100, borderWidth: 2, textAlign: 'center' }} />
            </View>
          </>
          :
          <>
            <Text style={styles.headerText}>Friendzy</Text>
            <MaterialCommunityIcons name="bell-badge-outline" size={28} color="black" style={{ padding: 5, borderRadius: 100, borderWidth: 2, textAlign: 'center' }} />
          </>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlign: 'center'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4b164c', // Your specified text color
  },
  storyImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    padding: 5,
  },
});

export default Header;