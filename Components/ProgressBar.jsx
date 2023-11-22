import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Progress from 'react-native-progress';
import NextArrowButton from './NextArrowButton';

const ProgressBar = ({ progressLevel  , updateProgress}) => {
    const [currentStep, setCureentStep] = useState(1)
    useEffect(() => {
        if (progressLevel == '0.2') {
            setCureentStep(1)
        }
        if (progressLevel == '0.4') {
            setCureentStep(2)
        }
        if (progressLevel == '0.6000000000000001') {
            setCureentStep(3)
        }
        if (progressLevel == '0.8') {
            setCureentStep(4)
        }
        if (progressLevel == '1') {
            setCureentStep(5)
        }
    }, [progressLevel,updateProgress])
    return (
        <View style={{ display: 'flex', marginHorizontal: 30 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '900', fontSize: 25, color: '#4b164c' }}>{(currentStep)}</Text>
                    <Text style={{ fontWeight: '900', fontSize: 25, color: '#eec4e8' }}>{'/5'}</Text>
                </View>
                <View style={{position:'absolute',bottom:10,right:0}}>
                    {
                        progressLevel==0.8 ? '':<NextArrowButton updateProgress={updateProgress} progressLevel={progressLevel}/>
                    }
                </View>
            </View>
            <Progress.Bar progress={progressLevel} width={340} height={8} color='#DD88CF' unfilledColor='#f7e1f4' borderColor='transparent' />
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({})