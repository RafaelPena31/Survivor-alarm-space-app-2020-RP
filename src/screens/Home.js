/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'
import InputText from '../components/InputText/InputText'

const Home = () => {
  return (
    <>
      <SafeAreaView>
        <Text>Home</Text>
        <InputText placeHolderText="Placeholder" maxLength={20}/>
      </SafeAreaView>
    </>
  )
}

export default Home
