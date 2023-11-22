import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({title}) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
    </>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '900',
        color: '#4b164c',
        marginTop: 30,
    },
})