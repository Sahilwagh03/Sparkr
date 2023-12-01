import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const InterestCard = ({interest,image}) => {
    return (
        <View style={{ padding: 10,marginBottom:10, backgroundColor: '#fdf7fd', borderRadius: 20, display: 'flex', flexDirection: 'row' ,justifyContent:'space-between',alignItems:'center'}}>
            <View style={{display: 'flex', flexDirection: 'row',gap:10}}>
                <View style={{ width: 80, height: 80 }}>
                    <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                </View>
                <View style={{display: 'flex', flexDirection: 'column',gap:10}}>
                    <Text style={{fontSize:20,fontWeight:'800'}}>{interest}</Text>
                    <Text style={{fontWeight:'500',color:'#e5a5db'}}>3.2K people</Text>
                </View>
            </View>
            <View>
                <AntDesign name="right" size={24} color="#cbb6cb" />
            </View>
        </View>
    )
}

export default InterestCard

const styles = StyleSheet.create({})