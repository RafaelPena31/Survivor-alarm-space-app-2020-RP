import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, AsyncStorage } from 'react-native'

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

  // temp
  useEffect(() => {
    navigation.navigate('FormTwo')
  }, [])
  // temp

  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [gender, setGender] = useState('Male')
  const [name, setName] = useState('')

  const save = async () => {
    //alert(age)
    try {
      if (isNaN(age)) throw new Error('Invalid age')
      if (isNaN(height)) throw new Error('Invalid height')
      if (isNaN(weight)) throw new Error('Invalid weight')
      await AsyncStorage.setItem('name', name)
      await AsyncStorage.setItem('age', age)
      await AsyncStorage.setItem('gender', gender)
      await AsyncStorage.setItem('height', height)
      await AsyncStorage.setItem('weight', weight)
      navigation.navigate('FormTwo')
    } catch (e) {
      alert(e)
    }
  }

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
            <InputText placeHolderText='Age' maxLength={100} value={age} onChange={e => setAge(e)} keyboardType='numeric' />
            <View style={styles.pickerContainer}>
              <Picker selectedValue={gender} style={styles.picker} onValueChange={itemValue => setGender(itemValue)}>
                <Picker.Item label='Gender: Male' value='Male' />
                <Picker.Item label='Gender: Female' value='Female' />
              </Picker>
            </View>
            <InputText placeHolderText='Height (cm)' maxLength={100} value={height} onChange={e => setHeight(e)} keyboardType='numeric' />
            <InputText placeHolderText='Weight (kg)' maxLength={100} value={weight} onChange={e => setWeight(e)} keyboardType='numeric' />
            <TouchableOpacity
              style={buttonStyles.submit}
              onPress={() => {
                const fields = [weight, age, height, name]
                const find = fields.find(v => v.length === 0)
                typeof find !== 'undefined' && find.length === 0 ? alert("One or more fields haven't been filled") : save()
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
