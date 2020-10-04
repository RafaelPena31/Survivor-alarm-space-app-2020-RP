import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './CareStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../Styles/_colors'

/* import { useNavigation } from '@react-navigation/native' */

const CareScreen = () => {
  /*   const navigation = useNavigation() */

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
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>f</Text>
            <Text style={styles.dataUserText}>f</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CareScreen
