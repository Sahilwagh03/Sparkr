import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import BackButton from '../Components/BackButton'
import Title from '../Components/Title'
import IntrestCustomButton from '../Components/IntrestCustomButton'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const IntrestPickScreen = () => {

  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <BackButton route='SignUp'/>
        <Title title='Select up to 5 interests'/>
        <View style={{ marginTop: 20, display: 'flex', gap: 10 }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <IntrestCustomButton category='Gaming' icon={<Ionicons name="md-game-controller" size={24} color="skyblue" />} />
            <IntrestCustomButton category='Dancing' icon={<MaterialCommunityIcons name="dance-ballroom" size={24} color="#FF69B4" />} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <IntrestCustomButton category='Language' icon={<Entypo name="language" size={24} color="#FFA07A" />} />
            <IntrestCustomButton category='Music' icon={<Ionicons name="musical-notes" size={24} color="#BA55D3" />} />
            <IntrestCustomButton category='Movie' icon={<MaterialCommunityIcons name="movie-open" size={24} color="#FFD700" />} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <IntrestCustomButton category='Photography' icon={<FontAwesome name="camera-retro" size={24} color="#00CED1" />} />
            <IntrestCustomButton category='Architecture' icon={<FontAwesome name="building" size={24} color="#8A2BE2" />} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <IntrestCustomButton category='Fashion' icon={<Ionicons name="woman-sharp" size={24} color="#20B2AA" />} />
            <IntrestCustomButton category='Book' icon={<SimpleLineIcons name="notebook" size={24} color="#4682B4" />} />
            <IntrestCustomButton category='Write' icon={<FontAwesome name="pencil-square-o" size={24} color="#32CD32" />} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <IntrestCustomButton category='Nature' icon={<MaterialIcons name="nature" size={24} color="#3CB371" />} />
            <IntrestCustomButton category='Painting' icon={<FontAwesome name="paint-brush" size={24} color="#800080" />} />
            <IntrestCustomButton category='Football' icon={<Ionicons name="football" size={24} color="black" />} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <IntrestCustomButton category='People' icon={<Ionicons name="people" size={24} color="#4169E1" />} />
            <IntrestCustomButton category='Animals' icon={<FontAwesome5 name="dog" size={24} color="brown" />} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
            <IntrestCustomButton category='Gym & Fitness' icon={<MaterialCommunityIcons name="arm-flex" size={24} color="#e6df15" />} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default IntrestPickScreen

const styles = StyleSheet.create({})
