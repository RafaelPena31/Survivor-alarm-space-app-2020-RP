import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Routes from './Routes'

import OneSignal from 'react-native-onesignal'

const NewApp = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#111' />
      <Routes />
    </>
  )
}

class App extends Component {
  constructor(properties) {
    super(properties)
    OneSignal.init('37c4127b-1a52-4bb5-9807-10ffed66a44d')

    OneSignal.addEventListener('opened', this.onOpened)
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('opened', this.onOpened)
  }

  // onOpened(openResult) {
  //   console.log('Message: ', openResult.notification.payload.body)
  //   console.log('openResult: ', openResult)
  //   alert('Message: ', openResult.notification.payload.body)
  // }

  render() {
    return <NewApp />
  }
}

export default App
