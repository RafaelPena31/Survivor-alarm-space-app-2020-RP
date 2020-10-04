import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, View, Animated, Easing } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import astronautaBg from '../../assets/images/astronauta.png'
import { useNavigation } from '@react-navigation/native'

import styles from './HomeStyle'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../Styles/_colors'

const HomeScreen = () => {
  const [isLogged, setIsLogged] = useState(false)
  const verticalVal = new Animated.Value(0);

  const navigation = useNavigation()

  useEffect(() => {
    Animated.timing(verticalVal, { toValue: 20, duration: 2000, easing: Easing.inOut(Easing.cubic), useNativeDriver: true, }).start()
    verticalVal.addListener(({ value }) => {
      if (value == 20) {
        Animated.timing(verticalVal, { toValue: 0, duration: 2000, easing: Easing.inOut(Easing.cubic), useNativeDriver: true, }).start()
      }
      else if (value == 0) {
        Animated.timing(verticalVal, { toValue: 20, duration: 2000, easing: Easing.inOut(Easing.cubic), useNativeDriver: true, }).start()
      };
    })
  }, [verticalVal])

  useEffect(() => {
    if (isLogged) {
      navigation.navigate('Status')
    }
  }, [])

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView>
        <LinearGradient colors={[colors.secondaryDark, colors.secondaryDark, colors.principal]}>
          <Animated.Image source={astronautaBg} style={[styles.image, { transform: [{ translateY: verticalVal }] }]} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Survive with us</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormOne')}>
              <View style={styles.textButtonContainer}>
                <Text style={styles.textButton}>Start</Text>
                <Icon name='arrow-right' color='#fff' size={30} />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen