import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import astronautaBg from '../../assets/images/astronauta.png'
import { useNavigation } from '@react-navigation/native'

import styles from './HomeStyle'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Image source={astronautaBg} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Survive with us</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormOne')}>
          <View style={styles.textButtonContainer}>
            <Text style={styles.textButton}>Start</Text>
            <Icon name='arrow-right' color='#fff' size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
