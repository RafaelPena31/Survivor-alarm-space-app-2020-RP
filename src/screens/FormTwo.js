import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Form from '../components/Form/Form'

const FormTwo = ({ navigation }) => {
  const [touchableColor1, setTouchableColor1] = useState(false)
  const [touchableColor2, setTouchableColor2] = useState(false)
  const [touchableColor3, setTouchableColor3] = useState(false)

  const [selectedValue1, setSelectedValue1] = useState('')
  const [selectedValue2, setSelectedValue2] = useState('')
  const [selectedValue3, setSelectedValue3] = useState('')
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Form>
            <ScrollView>
              <View style={styles.astroIcon}></View>
              <Text style={styles.header}>Selecione um dos 3 tópicos abaixo e logo após selecione a carga horária</Text>
              <Image
                source={require('../assets/images/goal-icon.png')}
                style={{ width: 250, height: 250, alignSelf: 'center', marginBottom: 50 }}
              />

              <TouchableOpacity
                style={[styles.touchableItem, touchableColor1 ? styles.selectedItem : {}]}
                onPress={() => {
                  setTouchableColor1(!touchableColor1)
                }}>
                <Text style={styles.headerText}>Exercício</Text>
                <Icon name='dumbbell' size={86} style={[styles.image, touchableColor1 ? styles.selectedIcon : styles.unselectedIcon]} />
                <View style={styles.pickerList}>
                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50, width: 100 }}
                    onValueChange={itemValue => setSelectedValue1(itemValue)}>
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

                  <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft:15, marginRight:25 }}> + </Text>

                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50, width: 100 }}
                    onValueChange={itemValue => setSelectedValue1(itemValue)}>
                    <Picker.Item label='5m' value='1' />
                    <Picker.Item label='10m' value='2' />
                    <Picker.Item label='15m' value='3' />
                    <Picker.Item label='20m' value='4' />
                    <Picker.Item label='25m' value='5' />
                    <Picker.Item label='30m' value='6' />
                    <Picker.Item label='35m' value='7' />
                    <Picker.Item label='40m' value='8' />
                    <Picker.Item label='45m' value='9' />
                    <Picker.Item label='50m' value='10' />
                    <Picker.Item label='55m' value='11' />
                  </Picker>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.touchableItem, touchableColor2 ? styles.selectedItem : {}]}
                onPress={() => {
                  setTouchableColor2(!touchableColor2)
                }}>
                <Text style={styles.headerText}>Estudos</Text>
                <Icon
                  name='journal-whills'
                  size={86}
                  style={[styles.image, touchableColor2 ? styles.selectedIcon : styles.unselectedIcon]}
                />
                <View style={styles.pickerList}>
                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50, width: 100 }}
                    onValueChange={itemValue => setSelectedValue1(itemValue)}>
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

                  <Text style={{ fontWeight: 'bold',fontSize: 32, marginLeft:15, marginRight:25}}> + </Text>

                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50, width: 100 }}
                    onValueChange={itemValue => setSelectedValue1(itemValue)}>
                    <Picker.Item label='5m' value='1' />
                    <Picker.Item label='10m' value='2' />
                    <Picker.Item label='15m' value='3' />
                    <Picker.Item label='20m' value='4' />
                    <Picker.Item label='25m' value='5' />
                    <Picker.Item label='30m' value='6' />
                    <Picker.Item label='35m' value='7' />
                    <Picker.Item label='40m' value='8' />
                    <Picker.Item label='45m' value='9' />
                    <Picker.Item label='50m' value='10' />
                    <Picker.Item label='55m' value='11' />
                  </Picker>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.touchableItem, touchableColor3 ? styles.selectedItem : {}]}
                onPress={() => {
                  setTouchableColor3(!touchableColor3)
                }}>
                <Text style={styles.headerText}>Manutenção</Text>
                <Icon name='tools' size={86} style={[styles.image, touchableColor3 ? styles.selectedIcon : styles.unselectedIcon]} />
                <View style={styles.pickerList}>
                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50, width: 100}}
                    onValueChange={itemValue => setSelectedValue1(itemValue)}>
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

                  <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft:15, marginRight:25 }}> + </Text>

                  <Picker
                    selectedValue={selectedValue1}
                    style={{ height: 50, width: 100 }}
                    onValueChange={itemValue => setSelectedValue1(itemValue)}>
                    <Picker.Item label='5m' value='1' />
                    <Picker.Item label='10m' value='2' />
                    <Picker.Item label='15m' value='3' />
                    <Picker.Item label='20m' value='4' />
                    <Picker.Item label='25m' value='5' />
                    <Picker.Item label='30m' value='6' />
                    <Picker.Item label='35m' value='7' />
                    <Picker.Item label='40m' value='8' />
                    <Picker.Item label='45m' value='9' />
                    <Picker.Item label='50m' value='10' />
                    <Picker.Item label='55m' value='11' />
                  </Picker>
                </View>
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
    backgroundColor: '#7200bf'
  },
  pickerList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  astroIcon: {
    color: '#fff',
    width: '100%',
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
    borderColor: '#34CB79',
    borderWidth: 5
  },

  selectedIcon: {
    color: '#34CB79'
  },

  unselectedIcon: {
    color: '#000'
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

  headerText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign:"center"
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
    height: 100,
    margin: 15,
    alignSelf:"center"
  },
  astro: {
    marginBottom: 20,
    flexShrink: 0
  },
  scrollView: {
    height: '100%'
  }
})
