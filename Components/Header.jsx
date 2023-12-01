import { Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Profile1 from '../assets/Profile1.jpg';
import { useNavigation } from '@react-navigation/native';
const Header = ({ activeButton, onClickFilter, filter, onClickSearch, search }) => {

  const [searchValue, setSearchValue] = useState('')
  const navigation = useNavigation()
  return (
    <View style={[styles.headerContainer]}>
      {activeButton === 'Search Partners' ? (
        <>
          <Image source={Profile1} style={styles.storyImage} />
          <View style={styles.iconContainer}>
            <View style={styles.iconBorder}>
              <MaterialCommunityIcons name="heart-multiple-outline" size={28} color="black" />
            </View>
            <View style={styles.iconBorder}>
              <AntDesign name="bars" size={28} color="black" />
            </View>
          </View>
        </>
      ) : activeButton === 'Discover' ? (

        search ?
          (
            <>
              <View style={[styles.iconContainer]}>
                <View style={[styles.iconBorder, {width:'85%',borderRadius:10,display:'flex',alignItems:'center' ,flexDirection:'row',backgroundColor:'#fdf7fd',borderColor:'#fdf7fd'}]}>
                <AntDesign name="search1" size={28} color="black" />
                  <TextInput
                    style={{ width: '100%' ,padding:5,fontSize:16}}
                    placeholder='Search'
                    value={searchValue}
                    onChangeText={(value) => setSearchValue(value)}
                  />
                </View>
                <TouchableWithoutFeedback onPress={() => {onClickFilter(!filter),onClickSearch(false)}}>
                  <View style={styles.iconBorder}>
                    <AntDesign name="bars" size={28} color="black" />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </>
          ) :
          (
            <>
              <Text style={styles.headerText}>{activeButton}</Text>
              <View style={styles.iconContainer}>
                <TouchableWithoutFeedback onPress={() => onClickSearch(!search)}>
                  <View style={styles.iconBorder}>
                    <AntDesign name="search1" size={28} color="black" />
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => onClickFilter(!filter)}>
                  <View style={styles.iconBorder}>
                    <AntDesign name="bars" size={28} color="black" />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </>
          )

      ) : (
        <>
          <Text style={styles.headerText}>Friendzy</Text>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <View style={styles.iconBorder}>
              <MaterialCommunityIcons name="bell-badge-outline" size={28} color="black" />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('UserProfile')}>
              <Image source={Profile1} style={styles.storyImage} />
            </TouchableWithoutFeedback>
          </View>
        </>
      )}
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBorder: {
    borderWidth: 2,
    borderRadius: 100,
    padding: 5,
    borderColor: 'black',
  },
});

export default Header;
