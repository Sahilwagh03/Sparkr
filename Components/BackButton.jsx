import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const BackButton = ({route,color}) => {

    const navigation = useNavigation()
    const handleRoute=(route)=>{
        navigation.navigate(route)
    }
    return (
        <>
            <TouchableOpacity style={BackButtonStyle.BackButtonIcon} onPress={()=> handleRoute(route)}>
                <MaterialIcons name="keyboard-arrow-left" size={30} color={color ? color : 'black'} />
            </TouchableOpacity>
        </>
    )
}

export default BackButton

const BackButtonStyle = StyleSheet.create({
    BackButtonIcon:{
        marginLeft:20,
        marginTop:20,
        width:40,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        borderWidth:1.5,
        borderColor:'gray'
    }
})