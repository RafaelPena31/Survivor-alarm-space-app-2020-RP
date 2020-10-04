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
          {/* <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Time that shoudn't be spent on console per day</Text>
            <Text style={styles.dataUserText}>8h</Text>
          </View> */}
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Name</Text>
            <Text style={styles.dataUserText}>Astronaut Name</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Age</Text>
            <Text style={styles.dataUserText}>20</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Weight</Text>
            <Text style={styles.dataUserText}>165,35 lbs</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Height</Text>
            <Text style={styles.dataUserText}>5&#39;10</Text>
          </View>
          <View style={styles.dataUserContainerOne}>
            <Text style={styles.dataUserText}>Body Mass Index</Text>
            <Text style={styles.dataUserText}>23.7 (normal weight)</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CareScreen
