import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, Picker } from 'react-native'

import Form from '../components/Form/Form'

const FormTwo = ({ navigation }) => {
  const [touchableColor, setTouchableColor] = useState(false)
  const [selectedValue1, setSelectedValue1] = useState('')
  const [selectedValue2, setSelectedValue2] = useState('')
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Form>
            <View style={styles.astroIcon}></View>

            <ScrollView>
              <Text style={styles.header}>Selecione um dos 3 tópicos abaixo e logo após selecione a carga horária</Text>
              <Image source={require('../assets/images/goal-icon.jpg')} width={120} height={150} />
              <TouchableOpacity
                style={([styles.touchableItem], touchableColor == true ? styles.selectedItem : {})}
                onPress={() => {
                  if (touchableColor) {
                    setTouchableColor(!touchableColor)
                  }
                }}>
                <Text style={styles.headerText}>Exercício</Text>
                <Image source={require('../assets/images/exercise-icon.png')} style={styles.image} />
                <Picker
                  selectedValue={selectedValue1}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}>
                  <Picker.Item label='1h' value='1' />
                  <Picker.Item label='2h' value='2' />
                  <Picker.Item label='3h' value='3' />
                  <Picker.Item label='4h' value='4' />
                  <Picker.Item label='5h' value='5' />
                  <Picker.Item label='6h' value='6' />
                  <Picker.Item label='7h' value='7' />
                  <Picker.Item label='8h' value='8' />
                  <Picker.Item label='9h' value='9' />
                  <Picker.Item label='10h' value='10' />
                  <Picker.Item label='11h' value='11' />
                  <Picker.Item label='12h' value='12' />
                </Picker>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touchableItem}>
                <Text style={styles.headerText}>Exercício</Text>
                <Image source={require('../assets/images/exercise-icon.png')} style={styles.image} />
                <Picker
                  selectedValue={selectedValue2}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                  <Picker.Item label='1h' value='1' />
                  <Picker.Item label='2h' value='2' />
                  <Picker.Item label='3h' value='3' />
                  <Picker.Item label='4h' value='4' />
                </Picker>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touchableItem}>
                <Text style={styles.headerText}>Exercício</Text>
                <Image source={require('../assets/images/exercise-icon.png')} style={styles.image} />
                <Text>Horas de exercício por dia, ( em horas )</Text>
              </TouchableOpacity>
            </ScrollView>
          </Form>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default FormTwo

const styles = StyleSheet.create({
  safeAreaView: {
    justifyContent: 'flex-end',
    backgroundColor: '#7200bf',
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
  touchableItem: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedItem: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700'
  },
  header: {
    marginBottom: 50,
    fontSize: 28,
    fontWeight: '700',
    color: '#fff'
    //fontFamily: require('../assets/fonts/Poppins-Bold.ttf')
  },
  image: {
    width: 100,
    height: 100
  },
  astro: {
    marginBottom: 20,
    flexShrink: 0
  },
  scrollView: {
    height: '100%'
  }
})
