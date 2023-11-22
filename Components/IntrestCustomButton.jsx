import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
const IntrestCustomButton = ({ icon, category }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <TouchableOpacity onPress={()=> setIsActive(!isActive)}>
                <View style={[{paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100, borderColor: '#ccc', borderWidth: 2 }, isActive && {borderColor:'#DD88CF'}]}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
                        {icon}
                        <Text style={{ fontWeight: '700', fontSize: 16, color: '#4b164c' }}>{category}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>

    )
}

export default IntrestCustomButton

const styles = StyleSheet.create({})