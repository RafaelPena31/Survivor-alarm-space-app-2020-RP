import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import Form from '../../components/Form/Form'
import InputText from '../../components/InputText/InputText'

import styles from './FormOneStyle'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import buttonStyles from '../../Styles/ButtonStyles/ButtonStyles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../Styles/_colors'

const FormOneScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient colors={[colors.principal, colors.secondaryDark, colors.secondaryDark]}>
        <View style={styles.iconContainer}>
          <Icon name='user-astronaut' size={130} color='#fff' />
          <Text style={styles.title}>Who are you?</Text>
        </View>
        <Form>
          <InputText placeHolderText='Name' maxLength={100} />
          <InputText placeHolderText='Age' maxLength={100} />
          <InputText placeHolderText='Gender' maxLength={100} />
          <InputText placeHolderText='Height' maxLength={100} />
          <InputText placeHolderText='Weight' maxLength={100} />
          <TouchableOpacity style={buttonStyles.submit} onPress={() => navigation.navigate('FormTwo')}>
            <Text style={buttonStyles.textSubmit}>Next</Text>
          </TouchableOpacity>
        </Form>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default FormOneScreen
