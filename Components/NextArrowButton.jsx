import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const NextArrowButton = ({updateProgress,progressLevel}) => {

    
    const route = useNavigation()
    const handleNext = ()=>{
        updateProgress(progressLevel+0.2)
        if(progressLevel==1){
            route.navigate('Tabs')
        }
    }
    return (
        <View>
            <TouchableOpacity onPress={handleNext}>
                <View style={{ padding: 20, backgroundColor: '#4b164c', borderRadius: 100 }}>
                    {
                         progressLevel==0.8 ? <Text style={{fontSize:20,fontWeight:'800',textAlign:'center',color:'white'}}>Next</Text> : <AntDesign name="arrowright" size={24} color="white" />
                    }
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default NextArrowButton

const styles = StyleSheet.create({})