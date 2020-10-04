import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native';
import Routes from './Routes'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Routes />
    </>
  )
}

export default App