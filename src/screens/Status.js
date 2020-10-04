import React from 'react'
import { View, StyleSheet, Text, Bar } from 'react-native'


const Status = ({ children }) => {
  return (
    <View style={styles.progressBar}>

    </View>
  )
}

const styles = StyleSheet.create({
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
})

export default Status

