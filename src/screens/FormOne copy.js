import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'

import Form from '../components/Form/Form'
import InputText from '../components/InputText/InputText'
import Btn from '../components/Btn/Btn'
import NotificationManager from '../components/NotificationManager/NotificationManager'

const localNotify = new NotificationManager()

const FormOne = ({ navigation }) => {
  useEffect(() => {
    localNotify.configure(
      token => console.log('[Notification] Registered: ', token),
      notify => console.log('[Notification] onNotification: ', notify),
      notify => console.log('[Notification] onOpenNotification:', notify)
    )
  }, [])

  const onPressSendNotification = () => {
    const options = {
      soundName: 'default',
      playSound: true,
      vibrate: true
    }

    localNotify.showNotification(1, 'App Notification', 'Local Notification', {}, options)
  }

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
            {/* <Btn title='Next' onPress={() => navigation.navigate('FormTwo')} /> */}
            <Btn
              title='Josias'
              onPress={() => {
                onPressSendNotification()
              }}
            />
          </Form>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default FormOne

const styles = StyleSheet.create({
  safeAreaView: {
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    height: '100%'
  },
  astroIcon: {
    marginTop: 50,
    marginBottom: 50,
    color: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  astro: {
    marginBottom: 20,
    flexShrink: 0
  },
  scrollView: {
    height: '100%'
  }
})
