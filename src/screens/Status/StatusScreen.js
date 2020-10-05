import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, AsyncStorage } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

import styles from './StatusStyle'
import colors from '../../Styles/_colors'

// eslint-disable-next-line react/prop-types
const StatusScreen = ({ sets }) => {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [gender, setGender] = useState('')
  const [BMR, setBMR] = useState(0)
  const [BMI, setBMI] = useState(0)
  const [exercises, setExercises] = useState(0)
  const [studies, setStudies] = useState(0)
  const [maintenance, setMaintenance] = useState(0)
  const [hardWork, setHardWork] = useState(0)

  const [points, setPoints] = useState(0)
  const [sleepHours, setSleepHours] = useState(0)
  const [minimunCalories, setMinimunCalories] = useState(0)
  const [waterIntake, setWaterIntake] = useState(2000)
  const [light, setLight] = useState()

  /* Progress state Start */

  //const [healthBar, setHealthBar] = useState(0)
  // const [sleepBar, setSleepBar] = useState(0)
  // const [foodBar, setFoodBar] = useState(0)
  // const [waterBar, setWaterBar] = useState(0)
  // const [lightBar, setLightBar] = useState(0)
  // const [melatoninBar, setMelatoninBar] = useState(0)

  /* Progress state End */

  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      try {
        setName(await AsyncStorage.getItem('name'))
        setAge(await AsyncStorage.getItem('age'))
        setGender(await AsyncStorage.getItem('gender'))
        setHeight(await AsyncStorage.getItem('height'))
        setWeight(await AsyncStorage.getItem('weight'))
        setBMR(await AsyncStorage.getItem('BMR'))
        setBMI(await AsyncStorage.getItem('BMI'))
        setExercises(await AsyncStorage.getItem('exercises'))
        setStudies(await AsyncStorage.getItem('studies'))
        setMaintenance(await AsyncStorage.getItem('maintenance'))
        setHardWork(await AsyncStorage.getItem('hardwork'))

        sets.setHealthBar((await AsyncStorage.getItem('healthBar')) || 0)
        sets.setSleepBar((await AsyncStorage.getItem('sleepBar')) || 0)
        sets.setFoodBar((await AsyncStorage.getItem('foodBar')) || 0)
        sets.setWaterBar((await AsyncStorage.getItem('waterBar')) || 0)
        sets.setLightBar((await AsyncStorage.getItem('lightBar')) || 0)
        sets.setMelatoninBar((await AsyncStorage.getItem('melatoninBar')) || 0)
      } catch (e) {
        alert(e)
      }
    })()
  }, [])

  function pointGrape(exercises, studies, maintenance, hardwork) {
    function pointsCalc() {
      let _points = points
      _points += 2 * exercises
      _points += 1 * studies
      _points += 3 * maintenance
      _points += 3 * hardwork
      _points += setPoints(_points)
    }

    gender == 'Female' ? womanBazalCalc() : menBazalCalc()

    pointsCalc()

    function womanBazalCalc() {
      setBMR(655.7 + 13.75 * weight + 5.003 * height - 6.755 * age)
    }

    function menBazalCalc() {
      setBMR(66.47 + 13.75 * weight + 5.003 * height - 6.755 * age)
    }

    function sleepHours() {
      let minimunSleepHours = parseInt(points / 8) * 90
      minimunSleepHours /= 60

      setSleepHours(minimunSleepHours)
    }

    sleepHours()

    function minimunCals() {
      let calories = parseInt(BMR) + 50 * points

      setMinimunCalories(parseInt(calories))
    }

    minimunCals()

    function minimunWaterIntake() {
      let water = parseInt(points / 3) * 100

      setWaterIntake(parseInt(water))
    }

    minimunWaterIntake()

    function minimunLightIncome() {
      let lightCalc = parseInt(points / 12) * 45
      lightCalc /= 60
      setLight(lightCalc)
    }

    minimunLightIncome()
  }

  useEffect(() => {
    pointGrape(exercises, studies, hardWork)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <LinearGradient colors={[colors.principal, colors.secondaryDark, colors.principal]} style={styles.statusContainer}>
          {/* <Progress.Bar progress={0.9} width={350} color={'blue'} height={15} borderRadius={50} /> */}
          <View style={styles.trianguloContainer}>
            <LinearGradient
              colors={[colors.complementarySemiDark, colors.complementarySemiDark, colors.complementary]}
              style={styles.trianguloCima}></LinearGradient>
            <View style={styles.superiorContainer}>
              <View style={styles.firstLineContainer}>
                <View style={styles.iconContainer}>
                  <Icon name='user-astronaut' size={80} color='#fff' />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>{name}</Text>
                  <Text style={styles.ageText}>age: {age}</Text>
                  <Text style={styles.ageText}>weight: {weight}kg</Text>
                  <Text style={styles.ageText}>height: {height / 100}m </Text>
                </View>
              </View>
              {/* =================================================== */}
              <TouchableOpacity style={styles.buttonToDos} onPress={() => navigation.navigate('FormTwo')}>
                <Text style={styles.buttonToDosText}>Update your routine</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inferiorContainer}>
              <View style={styles.iconContainer}>
                <Icon name='book-reader' size={80} color='#fff' />
              </View>
              <View style={styles.textAdviceContainer}>
                <Text style={styles.nameAdviceText}>Survivor - Advices</Text>
              </View>
              {/* =================================================== */}
              <TouchableOpacity style={styles.buttonAdvice} onPress={() => navigation.navigate('Advice')}>
                <Text style={styles.buttonAdviceText}>View advices</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.statusBarContainer}>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={sets.healthBar} width={350} height={20} borderRadius={50} color='green' />
              <Text style={styles.labelProgessBar}>Health - {sets.healthBar}%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={sets.foodBar} width={350} height={20} borderRadius={50} color='orange' />
              <Text style={styles.labelProgessBar}>Food - {sets.foodBar}%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={sets.waterBar} width={350} height={20} borderRadius={50} color='lightblue' />
              <Text style={styles.labelProgessBar}>Water - {sets.waterBar}%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={sets.sleepBar} width={350} height={20} borderRadius={50} color='darkviolet' />
              <Text style={styles.labelProgessBar}>Sleep - {sets.sleepBar}%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={sets.melatoninBar} width={350} height={20} borderRadius={50} color='white' />
              <Text style={styles.labelProgessBar}>Melatonin - {sets.melatoninBar}%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={sets.lightBar} width={350} height={20} borderRadius={50} color='yellow' />
              <Text style={styles.labelProgessBar}>Good contact with light - {sets.lightBar}%</Text>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.content}>
              <Text style={styles.titleProfile}>Status</Text>
              <View style={styles.divider}></View>
            </View>
            <View style={styles.tableData}>
              <Text style={styles.tableText}>Minimal water:</Text>
              <Text style={styles.tableText}>2500Ml</Text>
            </View>
            <View style={styles.tableData}>
              <Text style={styles.tableText}>Minimal food:</Text>
              <Text style={styles.tableText}>2450 calorias</Text>
            </View>
            <View style={styles.tableData}>
              <Text style={styles.tableText}>Minimal sleep:</Text>
              <Text style={styles.tableText}>6h 30m</Text>
            </View>
            <View style={styles.tableData}>
              <Text style={styles.tableText}>Minimal light:</Text>
              <Text style={styles.tableText}>45</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StatusScreen
