import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'

import Form from '../../components/Form/Form'
import InputText from '../../components/InputText/InputText'
import Btn from '../../components/Btn/Btn'

import styles from './FormOneStyle'

const FormOneScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Form>
            <View style={styles.astroIcon}></View>
            <InputText placeHolderText='Name' maxLength={100} />
            <InputText placeHolderText='Age' maxLength={100} />
            <InputText placeHolderText='Gender' maxLength={100} />
            <InputText placeHolderText='Height' maxLength={100} />
            <InputText placeHolderText='Weight' maxLength={100} />
            <Btn title='Next' onPress={() => navigation.navigate('FormTwo')} />
          </Form>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default FormOneScreen
