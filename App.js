import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DiscoverScreen from './Screens/DiscoverScreen';
import MatchScreen from './Screens/MatchScreen';
import ChatScreen from './Screens/ChatScreen';

import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SignUpScreen from './Screens/SignUpScreen';
import Create_AccountScreen from './Screens/Create_AccountScreen';
import OtpScreen from './Screens/OtpScreen';
import AddPostScreen from './Screens/AddPostScreen';
import { Entypo } from '@expo/vector-icons';
import UserInfoScreen from './Screens/UserInfoScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          name='Create_Account'
          component={Create_AccountScreen}
        />
        <Stack.Screen
          name='Otp'
          component={OtpScreen}
        />
        <Stack.Screen
          name='UserInfo'
          component={UserInfoScreen}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 50,
          height: 74,
        },
        
      }}>
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? {backgroundColor:'#DD88CF', padding:10 , paddingHorizontal:12, borderRadius:100}:{backgroundColor:'transparent'}}><Octicons name="home" size={28} color={focused ? 'white':"#4b164c"} /></View>
            )
          }
        }} />
      <Tab.Screen name='Discover' component={DiscoverScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? {backgroundColor:'#DD88CF', padding:10 , paddingHorizontal:12, borderRadius:100}:{backgroundColor:'transparent'}}><Feather name="compass" size={28} color={focused ? 'white':"#4b164c"} /></View>
            )
          }
        }} />
      
      <Tab.Screen name='addPost' component={AddPostScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? {backgroundColor:'#DD88CF', padding:10 , paddingHorizontal:12, borderRadius:100}:{backgroundColor:'transparent'}}><Entypo name="plus" size={28} color={focused ? 'white':"#4b164c"} /></View>
            )
          }
        }} />
      <Tab.Screen name='Matches' component={MatchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? {backgroundColor:'#DD88CF', padding:10 , paddingHorizontal:12, borderRadius:100}:{backgroundColor:'transparent'}}><MaterialIcons name="group" size={28} color={focused ? 'white':"#4b164c"} /></View>
            )
          }
        }} />
      <Tab.Screen name='Chat' component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? {backgroundColor:'#DD88CF', padding:10 , paddingHorizontal:12, borderRadius:100}:{backgroundColor:'transparent'}}><Feather name="message-circle" size={28} color={focused ? 'white':"#4b164c"} /></View>
            )
          }
        }} />
    </Tab.Navigator>
  );
}