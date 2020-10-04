import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, AsyncStorage } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './CareStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../Styles/_colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

/* import { useNavigation } from '@react-navigation/native' */

const CareScreen = () => {
  /*   const navigation = useNavigation() */

  const [name, setName] = useState()
  const [gender, setGender] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [BMI, setBMI] = useState()

  useEffect(async () => {
    setName(await AsyncStorage.getItem('name', name))
    setAge(await AsyncStorage.getItem('age', age))
    setGender(await AsyncStorage.getItem('gender', gender))
    setHeight(await AsyncStorage.getItem('height', height))
    setWeight(await AsyncStorage.getItem('weight', weight))
    setBMI(weight / height ** 2)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <LinearGradient colors={[colors.principal, colors.secondaryDark, colors.complementaryDark]} style={styles.careContainer}>
          <View style={styles.iconContainer}>
            <Icon name='user-astronaut' size={130} color='#fff' />
            <Text style={styles.title}>Infos and cares</Text>
          </View>
        </LinearGradient>
        <View style={styles.content}>
          <Text style={styles.titleProfile}>Profile</Text>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.generalContainer}>
          {/* <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Time that shoudn't be spent on console per day</Text>
            <Text style={styles.dataUserText}>8h</Text>
          </View> */}
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Name</Text>
            <Text style={styles.dataUserText}>{name}</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Age</Text>
            <Text style={styles.dataUserText}>{age}</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Gender</Text>
            <Text style={styles.dataUserText}>{gender}</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Weight</Text>
<<<<<<< HEAD
            <Text style={styles.dataUserText}>{weight} kg</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Height</Text>
            <Text style={styles.dataUserText}>{height}</Text>
=======
            <Text style={styles.dataUserText}>75kg</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Height</Text>
            <Text style={styles.dataUserText}>177cm</Text>
>>>>>>> 8bc26290afebea3721afded9c3bb7829667ae7b1
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Body Mass Index</Text>
            <Text style={styles.dataUserText}>{BMI} (normal weight)</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Basal Metabolic Rate</Text>
            <Text style={styles.dataUserText}>1,761 Calories/day</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleProfile}>
              when you finish a task according to the time registered, click on the corresponding button to register
            </Text>
            <View style={styles.divider}></View>
          </View>
          <View style={styles.dataUserContainerOne}>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Exercises</Text>
              <Icon name='dumbbell' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Study</Text>
              <Icon name='journal-whills' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
          </View>
          <View style={styles.dataUserContainerOne}>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Maintenance</Text>
              <Icon name='tools' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Hard work</Text>
              <Icon name='dumbbell' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
          </View>
          <View style={styles.dataUserContainerOne}>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Sleep</Text>
              <Icon name='bell-slash' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Water</Text>
              <Icon name='water' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
          </View>
          <View style={styles.dataUserContainerOne}>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Food</Text>
              <Icon name='hamburger' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={() => {
                alert('função state')
              }}>
              <Text style={styles.headerText}>Light</Text>
              <Icon name='sun' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CareScreen
