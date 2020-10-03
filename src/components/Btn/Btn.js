import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const Btn = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.wrapper}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    backgroundColor: '#rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    padding: 10,
    paddingHorizontal: 16,
  },
  text: {
    color: '#ddd',
    fontWeight: 'bold',
  },
})

export default Btn
