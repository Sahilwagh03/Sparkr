import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackButton from '../Components/BackButton'
import Title from '../Components/Title'
import { Fontisto } from '@expo/vector-icons';
import NextArrowButton from '../Components/NextArrowButton';
const UploadPhotoScreen = ({ progressLevel, updateProgress }) => {
  return (
    <View>
      <View style={{display:'flex', justifyContent:'center'}}>
        <BackButton route='SignUp' />
        <Title title='Upload your photos' />
        <View style={{ marginTop: 30, marginHorizontal: 20, display: 'flex', flexDirection: 'row', gap: 20 }}>
          <View style={{ width: 220, height: 220, borderRadius: 20 }}>
            <Image source={require('../assets/Profile1.jpg')} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
          </View>
          <View style={{ display: 'flex', gap: 20 }}>
            <View style={{ gap: 10, padding: 20, width: 100, height: 100, backgroundColor: 'white', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
              <Fontisto name="smiley" size={30} color="gray" />
              <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#dd88ef', borderRadius: 100 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>+ Add</Text>
              </TouchableOpacity>
            </View>
            <View style={{ gap: 10, padding: 20, width: 100, height: 100, backgroundColor: 'white', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
              <Fontisto name="smiley" size={30} color="gray" />
              <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#dd88ef', borderRadius: 100 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>+ Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 20,paddingTop:10, gap: 20 }}>
          <View style={{ gap: 10, padding: 20, width: 100, height: 100, backgroundColor: 'white', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
            <Fontisto name="smiley" size={30} color="gray" />
            <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#dd88ef', borderRadius: 100 }}>
              <Text style={{ color: 'white', fontWeight: '500' }}>+ Add</Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 10, padding: 20, width: 100, height: 100, backgroundColor: 'white', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
            <Fontisto name="smiley" size={30} color="gray" />
            <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#dd88ef', borderRadius: 100 }}>
              <Text style={{ color: 'white', fontWeight: '500' }}>+ Add</Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 10, padding: 20, width: 100, height: 100, backgroundColor: 'white', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
            <Fontisto name="smiley" size={30} color="gray" />
            <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#dd88ef', borderRadius: 100 }}>
              <Text style={{ color: 'white', fontWeight: '500' }}>+ Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal:40}}>
          <NextArrowButton updateProgress={updateProgress} progressLevel={progressLevel} />
        </View>
      </View>
    </View>
  )
}

export default UploadPhotoScreen

const styles = StyleSheet.create({})