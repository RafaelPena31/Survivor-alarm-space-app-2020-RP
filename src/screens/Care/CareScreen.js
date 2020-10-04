import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './CareStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../Styles/_colors'

/* import { useNavigation } from '@react-navigation/native' */

const CareScreen = () => {
  /*   const navigation = useNavigation() */

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={[colors.principal, colors.secondaryDark, colors.secondaryDark]} style={styles.careContainer}>
        <View style={styles.iconContainer}>
          <Icon name='user-astronaut' size={130} color='#fff' />
          <Text style={styles.title}>Infos and cares</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default CareScreen
