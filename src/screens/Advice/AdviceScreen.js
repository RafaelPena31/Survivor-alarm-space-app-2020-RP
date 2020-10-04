import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../Styles/_colors'
import headerStyle from '../../components/Header/HeaderStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './AdviceStyle'
import { useNavigation } from '@react-navigation/native'
/* import { useNavigation } from '@react-navigation/native' */

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius eget sem ut rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eu laoreet magna. Aenean vitae eleifend erat. Proin ex purus, ultricies sed malesuada non, gravida ut urna. Integer auctor consequat pretium. Phasellus id blandit lorem. Sed et leo quis diam vulputate lobortis. Duis venenatis commodo aliquet. Nulla at pellentesque nulla.'

const AdviceScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={headerStyle.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='reply' size={40} color={'#222'} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleProfile}>Advices</Text>
          <View style={styles.divider}></View>
          <Text style={styles.subheading}>When to use the sleep inducer?</Text>
          <Text style={styles.paragraph}>{lorem}</Text>
          <Text style={styles.subheading}>Melatonin</Text>
          <Text style={styles.paragraph}>{lorem}</Text>
          <Text style={styles.subheading}>Blue pigmentation makes you stay awake</Text>
          <Text style={styles.paragraph}>{lorem}</Text>
          <Text style={styles.subheading}>Recommendations for a better sleep routine</Text>
          <Text style={styles.paragraph}>{lorem}</Text>
          <Text style={styles.subheading}>How to prevent the jet lag effect</Text>
          <Text style={styles.paragraph}>{lorem}</Text>
          <Text style={styles.subheading}>Items that can be used to ease resting</Text>
          <Text style={styles.paragraph}>{lorem}</Text>
          <Text style={styles.subheading}>When to be exposed to light</Text>
          <Text style={styles.paragraph}>{lorem}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AdviceScreen
