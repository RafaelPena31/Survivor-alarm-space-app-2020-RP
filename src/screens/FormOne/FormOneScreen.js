import React, { useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import Form from '../../components/Form/Form'
import InputText from '../../components/InputText/InputText'

import styles from './FormOneStyle'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import buttonStyles from '../../Styles/ButtonStyles/ButtonStyles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../Styles/_colors'
import { Picker } from '@react-native-community/picker'

const FormOneScreen = () => {
  const navigation = useNavigation()

  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('')
  const [name, setName] = useState('')

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <LinearGradient
          colors={[colors.principal, colors.secondaryDark, colors.secondaryDark]}
          style={{ height: '100%', justifyContent: 'space-between', paddingVertical: 30 }}>
          <View style={styles.iconContainer}>
            <Icon name='user-astronaut' size={130} color='#fff' />
            <Text style={styles.title}>Who are you?</Text>
          </View>
          <Form>
            <InputText placeHolderText='Name' maxLength={100} value={name} onChange={e => setName(e)} />
            <InputText placeHolderText='Age (year)' maxLength={100} value={age} onChange={e => setAge(e)} />
            <View style={styles.pickerContainer}>
              <Picker selectedValue={gender} style={styles.picker} onValueChange={itemValue => setGender(itemValue)}>
                <Picker.Item label='Gender: Male' value='1' />
                <Picker.Item label='Gender: Feminine' value='2' />
              </Picker>
            </View>
            <InputText placeHolderText='Height (cm)' maxLength={100} value={height} onChange={e => setHeight(e)} />
            <InputText placeHolderText='Weight (kg)' maxLength={100} value={weight} onChange={e => setWeight(e)} />
            <TouchableOpacity
              style={buttonStyles.submit}
              onPress={() => {
                const fields = [weight, age, height, gender, name]
                const find = fields.find(v => v.length === 0)
                typeof find !== 'undefined' && find.length === 0
                  ? alert("One or more fields haven't been filled")
                  : navigation.navigate('FormTwo')
              }}>
              <Text style={buttonStyles.textSubmit}>Next</Text>
            </TouchableOpacity>
          </Form>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FormOneScreen
