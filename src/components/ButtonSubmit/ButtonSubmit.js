import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonSubmit = ({}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width:'80%',
    alignSelf:'center',
    backgroundColor: '#5F6062',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#F0F0F5',
    borderWidth: 1,
    color: '#FFF',
  }
}) // 
// como q eu colorizo o placeholder sabe?


export default ButtonSubmit
