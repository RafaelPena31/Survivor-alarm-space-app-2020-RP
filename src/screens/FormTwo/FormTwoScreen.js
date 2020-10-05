import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'
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
  const [touchableColor4, setTouchableColor4] = useState(false)

  const [selectedValue1, setSelectedValue1] = useState('')
  const [selectedValue2, setSelectedValue2] = useState('')
  const [selectedValue3, setSelectedValue3] = useState('')
  const [selectedValue4, setSelectedValue4] = useState('')

  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <LinearGradient colors={[colors.complementarySemiDark, colors.complementary, colors.complementary]}>
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
                  <Text style={[styles.headerText, touchableColor1 ? styles.greenHeaderText : styles.blackHeaderText]}>Exercises</Text>
                  <Icon name='dumbbell' size={86} style={[styles.image, touchableColor1 ? styles.selectedIcon : styles.unselectedIcon]} />
                  <View style={styles.pickerList}>
                    <Picker
                      selectedValue={selectedValue1}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue1(itemValue)}>
                      <Picker.Item label='1h' value={1} />
                      <Picker.Item label='2h' value={2} />
                      <Picker.Item label='3h' value={3} />
                      <Picker.Item label='4h' value={4} />
                      <Picker.Item label='5h' value={5} />
                      <Picker.Item label='6h' value={6} />
                      <Picker.Item label='7h' value={7} />
                      <Picker.Item label='8h' value={8} />
                      <Picker.Item label='9h' value={9} />
                      <Picker.Item label='10h' value={10} />
                      <Picker.Item label='11h' value={11} />
                      <Picker.Item label='12h' value={12} />
                    </Picker>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.touchableItem, touchableColor2 ? styles.selectedItem : {}]}
                  onPress={() => {
                    setTouchableColor2(!touchableColor2)
                  }}>
                  <Text style={[styles.headerText, touchableColor2 ? styles.greenHeaderText : styles.blackHeaderText]}>Studies</Text>
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
                      <Picker.Item label='1h' value={1} />
                      <Picker.Item label='2h' value={2} />
                      <Picker.Item label='3h' value={3} />
                      <Picker.Item label='4h' value={4} />
                      <Picker.Item label='5h' value={5} />
                      <Picker.Item label='6h' value={6} />
                      <Picker.Item label='7h' value={7} />
                      <Picker.Item label='8h' value={8} />
                      <Picker.Item label='9h' value={9} />
                      <Picker.Item label='10h' value={10} />
                      <Picker.Item label='11h' value={11} />
                      <Picker.Item label='12h' value={12} />
                    </Picker>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.touchableItem, touchableColor3 ? styles.selectedItem : {}]}
                  onPress={() => {
                    setTouchableColor3(!touchableColor3)
                  }}>
                  <Text style={[styles.headerText, touchableColor3 ? styles.greenHeaderText : styles.blackHeaderText]}>Maintenance</Text>
                  <Icon name='tools' size={86} style={[styles.image, touchableColor3 ? styles.selectedIcon : styles.unselectedIcon]} />
                  <View style={styles.pickerList}>
                    <Picker
                      selectedValue={selectedValue3}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue3(itemValue)}>
                      <Picker.Item label='1h' value={1} />
                      <Picker.Item label='2h' value={2} />
                      <Picker.Item label='3h' value={3} />
                      <Picker.Item label='4h' value={4} />
                      <Picker.Item label='5h' value={5} />
                      <Picker.Item label='6h' value={6} />
                      <Picker.Item label='7h' value={7} />
                      <Picker.Item label='8h' value={8} />
                      <Picker.Item label='9h' value={9} />
                      <Picker.Item label='10h' value={10} />
                      <Picker.Item label='11h' value={11} />
                      <Picker.Item label='12h' value={12} />
                    </Picker>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.touchableItem, touchableColor4 ? styles.selectedItem : {}]}
                  onPress={() => {
                    setTouchableColor4(!touchableColor4)
                  }}>
                  <Text style={[styles.headerText, touchableColor4 ? styles.greenHeaderText : styles.blackHeaderText]}>Hard work</Text>
                  <Icon
                    name='place-of-worship'
                    size={86}
                    style={[styles.image, touchableColor4 ? styles.selectedIcon : styles.unselectedIcon]}
                  />
                  <View style={styles.pickerList}>
                    <Picker
                      selectedValue={selectedValue4}
                      style={{ height: 50, width: 100 }}
                      onValueChange={itemValue => setSelectedValue4(itemValue)}>
                      <Picker.Item label='1h' value={1} />
                      <Picker.Item label='2h' value={2} />
                      <Picker.Item label='3h' value={3} />
                      <Picker.Item label='4h' value={4} />
                      <Picker.Item label='5h' value={5} />
                      <Picker.Item label='6h' value={6} />
                      <Picker.Item label='7h' value={7} />
                      <Picker.Item label='8h' value={8} />
                      <Picker.Item label='9h' value={9} />
                      <Picker.Item label='10h' value={10} />
                      <Picker.Item label='11h' value={11} />
                      <Picker.Item label='12h' value={12} />
                    </Picker>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={buttonStyles.submit}
                  onPress={async () => {
                    try {
                      if (!touchableColor1 && !touchableColor2 && !touchableColor3 && !touchableColor4)
                        throw new Error('Select at least one activity')
                      await AsyncStorage.setItem('exercises', touchableColor1 ? `${selectedValue1}` : '0')
                      await AsyncStorage.setItem('studies', touchableColor2 ? `${selectedValue2}` : '0')
                      await AsyncStorage.setItem('maintenance', touchableColor3 ? `${selectedValue3}` : '0')
                      await AsyncStorage.setItem('hardwork', touchableColor4 ? `${selectedValue4}` : '0')
                      navigation.navigate('Status')
                    } catch (e) {
                      alert(e)
                    }
                  }}>
                  <Text style={buttonStyles.textSubmit}>Next</Text>
                </TouchableOpacity>
              </ScrollView>
            </Form>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default FormTwoScreen
