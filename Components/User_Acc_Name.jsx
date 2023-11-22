import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import BackButton from './BackButton'

const User_Acc_Name = () => {
    const [name, setName]= useState('')
    return (
        <View style={{flex:1 }}>
            <BackButton route='SignUp' />
            <View style={{marginHorizontal:30 }}>
                <Text style={styles.title}>What's your name?</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="John"
                        placeholderTextColor="#8e8e8e" // Set the color of the placeholder text
                        keyboardType='default'
                    />
                </View>
            </View>
        </View>
    )
}

export default User_Acc_Name

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '900',
        color: '#4b164c',
        marginTop: 30,
      },
      input: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical:15,
        borderRadius: 15,
        marginTop: 20,
        borderColor: '#DD88CF',
        borderWidth: 2,
        fontWeight:'700',
        fontSize:18,
        backgroundColor:'white'
      },
})
