import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { Picker } from '@react-native-community/picker'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

import Form from '../../components/Form/Form'

import styles from './FormTwoStyle'
import headerStyle from '../../components/Header/HeaderStyle'
import buttonStyles from '../../Styles/ButtonStyles/ButtonStyles'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../Styles/_colors'

const FormTwoScreen = () => {
  const [touchableColor1, setTouchableColor1] = useState(false)
  const [touchableColor2, setTouchableColor2] = useState(false)
  const [touchableColor3, setTouchableColor3] = useState(false)

  const [selectedValue1, setSelectedValue1] = useState('')
  const [selectedValue2, setSelectedValue2] = useState('')
  const [selectedValue3, setSelectedValue3] = useState('')

  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <LinearGradient colors={[colors.complementarySemiDark, colors.complementary, colors.complementary]}>
          <ScrollView style={styles.scrollView}>
            <View style={headerStyle.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='reply' size={40} color={'#fff'} />
              </TouchableOpacity>
            </View>
            <Form>
              <ScrollView>
                <View style={styles.astroIcon}></View>
                <Text style={styles.header}>Select one or more of the following topics and afterwards select the time spent each day</Text>
                <Image
                  // eslint-disable-next-line no-undef
                  source={require('../../assets/images/goal-icon.png')}
                  style={{ width: 250, height: 250, alignSelf: 'center', marginBottom: 50 }}
                />

                <TouchableOpacity
                  style={[styles.touchableItem, touchableColor1 ? styles.selectedItem : {}]}
                  onPress={() => {
                    setTouchableColor1(!touchableColor1)
                  }}>
                  <Text style={styles.headerText}>Exercises</Text>
                  <Icon name='dumbbell' size={86} style={[styles.image, touchableColor1 ? styles.selectedIcon : styles.unselectedIcon]} />
                  <View style={styles.pickerList}>
                    <Picker
                      selectedValue={selectedValue1}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue1(itemValue)}>
                      <Picker.Item label='2h' value='1' />
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

                    <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 15, marginRight: 25 }}> + </Text>

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
                  <Text style={styles.headerText}>Study</Text>
                  <Icon
                    name='journal-whills'
                    size={86}
                    style={[styles.image, touchableColor2 ? styles.selectedIcon : styles.unselectedIcon]}
                  />
                  <View style={styles.pickerList}>
                    <Picker
                      selectedValue={selectedValue2}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue2(itemValue)}>
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

                    <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 15, marginRight: 25 }}> + </Text>

                    <Picker
                      selectedValue={selectedValue3}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue2(itemValue)}>
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
                  <Text style={styles.headerText}>Maintenance</Text>
                  <Icon name='tools' size={86} style={[styles.image, touchableColor3 ? styles.selectedIcon : styles.unselectedIcon]} />
                  <View style={styles.pickerList}>
                    <Picker
                      selectedValue={selectedValue1}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue3(itemValue)}>
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

                    <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 15, marginRight: 25 }}> + </Text>

                    <Picker
                      selectedValue={selectedValue3}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue3(itemValue)}>
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

                <TouchableOpacity style={buttonStyles.submit} onPress={() => navigation.navigate('Status')}>
                  <Text style={buttonStyles.textSubmit}>Next</Text>
                </TouchableOpacity>
              </ScrollView>
            </Form>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </>
  )
}

export default FormTwoScreen
