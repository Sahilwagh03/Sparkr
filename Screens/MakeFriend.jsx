import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostCard from '../Components/PostCard'
import Profile1 from '../assets/Profile5.jpg'
import Profile2 from '../assets/Profile4.jpg'
import Profile3 from '../assets/Profile3.jpg'

const MakeFriend = () => {
  const data = [
    { name: 'Sahil Wagh', src: Profile1 },
    { name: 'Sahil Wagh', src: Profile2 },
    { name: 'Sahil Wagh', src: Profile3 },
    { name: 'Sahil Wagh', src: Profile1 },
    { name: 'Sahil Wagh', src: Profile2 },
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {data.map((d, index) => (
        <PostCard key={index} src={d} style={index === data.length - 1 ? { marginBottom: 80 } : {}}/>
      ))}
    </ScrollView>
  );
}

export default MakeFriend
