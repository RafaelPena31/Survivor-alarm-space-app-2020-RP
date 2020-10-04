import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

// eslint-disable-next-line react/prop-types
const InputText = ({ placeHolderText, maxLength, value, onChange }) => {
  return (
    <View>
      <TextInput
        style={[styles.input]}
        placeholder={placeHolderText}
        maxLength={maxLength}
        placeholderTextColor='#ccc'
        value={value}
        onChangeText={onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginBottom: 12,
    borderRadius: 6,
    borderColor: '#F0F0F5',
    borderWidth: 1,
    color: '#fff'
  }
})

export default InputText
