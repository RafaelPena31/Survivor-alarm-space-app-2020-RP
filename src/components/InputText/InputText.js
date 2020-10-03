import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const InputText = ({ placeHolderText, maxLength}) => {
    return (
        <View>
            <TextInput
                style={[styles.input]}
                placeholder={placeHolderText}
                maxLength={maxLength}
                placeholderTextColor='#ccc'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width:"80%",
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 6,
        marginBottom:12,
        borderRadius: 6,
        borderColor: '#F0F0F5',
        borderWidth: 1,
        color: '#fff',
    }
})


export default InputText
