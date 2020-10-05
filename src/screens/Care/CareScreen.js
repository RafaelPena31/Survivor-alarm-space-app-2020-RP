import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, View, AsyncStorage } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './CareStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../Styles/_colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

/* import { useNavigation } from '@react-navigation/native' */

const CareScreen = ({ sets }) => {
  /*   const navigation = useNavigation() */

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [BMI, setBMI] = useState(0)
  const [BMR, setBMR] = useState(0)

  useEffect(() => {
    ;(async () => {
      setName(await AsyncStorage.getItem('name'))
      setAge(await AsyncStorage.getItem('age'))
      setGender(await AsyncStorage.getItem('gender'))
      let _height = await AsyncStorage.getItem('height')
      setHeight(_height)
      const _weight = await AsyncStorage.getItem('weight')
      setWeight(_weight)

      setBMI(_weight / ((_height / 100) * (_height / 100)))

      console.log(_height)
      console.log(BMI)

      gender == 'Male'
        ? setBMR(66.47 + 13.75 * _weight + 5.003 * height - 6.755 * age)
        : setBMR(655.7 + 13.75 * _weight + 5.003 * height - 6.755 * age)

      await AsyncStorage.setItem('BMI', BMI)
      await AsyncStorage.setItem('BMR', BMR)
    })()
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
            <Text style={styles.dataUserText}>{weight}Kg</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Height</Text>
            <Text style={styles.dataUserText}>{height / 100}m</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Body Mass Index</Text>
            <Text style={styles.dataUserText}>{BMI.toFixed(2)}</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Basal Metabolic Rate</Text>
            <Text style={styles.dataUserText}>{BMR.toFixed(2)} Calories/day</Text>
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
              onPress={async () => {
                const h = sets.healthBar + 30
                const s = sets.sleepBar + 30
                const f = sets.foodBar + 30
                const w = sets.waterBar + 30
                const l = sets.lightBar + 30
                const m = sets.melatoninBar + 30
                sets.setHealthBar(h)
                sets.setSleepBar(s)
                sets.setFoodBar(f)
                sets.setWaterBar(w)
                sets.setLightBar(l)
                sets.setMelatoninBar(m)
                await AsyncStorage.setItem('healthBar', h)
                await AsyncStorage.setItem('sleepBar', s)
                await AsyncStorage.setItem('foodBar', f)
                await AsyncStorage.setItem('waterBar', w)
                await AsyncStorage.setItem('lightBar', l)
                await AsyncStorage.setItem('melatoninBar', m)
              }}>
              <Text style={styles.headerText}>Exercises</Text>
              <Icon name='dumbbell' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={async () => {
                const h = sets.healthBar + 30
                const s = sets.sleepBar + 30
                const f = sets.foodBar + 30
                const w = sets.waterBar + 30
                const l = sets.lightBar + 30
                const m = sets.melatoninBar + 30
                sets.setHealthBar(h)
                sets.setSleepBar(s)
                sets.setFoodBar(f)
                sets.setWaterBar(w)
                sets.setLightBar(l)
                sets.setMelatoninBar(m)
                await AsyncStorage.setItem('healthBar', h)
                await AsyncStorage.setItem('sleepBar', s)
                await AsyncStorage.setItem('foodBar', f)
                await AsyncStorage.setItem('waterBar', w)
                await AsyncStorage.setItem('lightBar', l)
                await AsyncStorage.setItem('melatoninBar', m)
              }}>
              <Text style={styles.headerText}>Study</Text>
              <Icon name='journal-whills' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
          </View>
          <View style={styles.dataUserContainerOne}>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={async () => {
                const h = sets.healthBar + 30
                const s = sets.sleepBar + 30
                const f = sets.foodBar + 30
                const w = sets.waterBar + 30
                const l = sets.lightBar + 30
                const m = sets.melatoninBar + 30
                sets.setHealthBar(h)
                sets.setSleepBar(s)
                sets.setFoodBar(f)
                sets.setWaterBar(w)
                sets.setLightBar(l)
                sets.setMelatoninBar(m)
                await AsyncStorage.setItem('healthBar', h)
                await AsyncStorage.setItem('sleepBar', s)
                await AsyncStorage.setItem('foodBar', f)
                await AsyncStorage.setItem('waterBar', w)
                await AsyncStorage.setItem('lightBar', l)
                await AsyncStorage.setItem('melatoninBar', m)
              }}>
              <Text style={styles.headerText}>Maintenance</Text>
              <Icon name='tools' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableItem}
              onPress={async () => {
                const h = sets.healthBar + 30
                const s = sets.sleepBar + 30
                const f = sets.foodBar + 30
                const w = sets.waterBar + 30
                const l = sets.lightBar + 30
                const m = sets.melatoninBar + 30
                sets.setHealthBar(h)
                sets.setSleepBar(s)
                sets.setFoodBar(f)
                sets.setWaterBar(w)
                sets.setLightBar(l)
                sets.setMelatoninBar(m)
                await AsyncStorage.setItem('healthBar', h)
                await AsyncStorage.setItem('sleepBar', s)
                await AsyncStorage.setItem('foodBar', f)
                await AsyncStorage.setItem('waterBar', w)
                await AsyncStorage.setItem('lightBar', l)
                await AsyncStorage.setItem('melatoninBar', m)
              }}>
              <Text style={styles.headerText}>Hard work</Text>
              <Icon name='dumbbell' size={86} style={styles.image} color={colors.complementaryDark} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CareScreen
