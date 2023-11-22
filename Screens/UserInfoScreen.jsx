import {StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import User_Acc_Name from '../Components/User_Acc_Name';
import ProgressBar from '../Components/ProgressBar';
import GenderSelectScreen from './GenderSelectScreen';
import IntrestPickScreen from './IntrestPickScreen';
import UploadPhotoScreen from './UploadPhotoScreen';
import KnownFriends from './KnownFriends';
const UserInfoScreen = () => {
  const [currentProgress , setCurrentProgress]=useState(0.2)
  return (
    <SafeAreaView style={{backgroundColor:'rgba(250, 237, 248,0.8)' ,flex:1}}>
      <View style={{flex:1}}>
        <View style={{flex:2}}>
          {
            currentProgress==0.2 && <User_Acc_Name /> ||
            currentProgress==0.4 && <GenderSelectScreen/> ||
            currentProgress==0.6000000000000001 && <IntrestPickScreen/> ||
            currentProgress==0.8 && <UploadPhotoScreen progressLevel={currentProgress} updateProgress={(progress)=> setCurrentProgress(progress)}/> ||
            currentProgress==1 && <KnownFriends />
          }
        </View>
        <View style={{paddingBottom:30}}>
          <ProgressBar progressLevel={currentProgress} updateProgress={(progress)=> setCurrentProgress(progress)}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default UserInfoScreen

const styles = StyleSheet.create({})