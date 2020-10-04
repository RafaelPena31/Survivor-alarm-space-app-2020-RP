import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import headerStyle from '../../components/Header/HeaderStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './AdviceStyle'
import { useNavigation } from '@react-navigation/native'
import scheduleImage from '../../assets/images/schedule.png'
/* import { useNavigation } from '@react-navigation/native' */
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

          <Text style={styles.subheading}>Melatonin</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.focusText}>Melatonin</Text> is a hormone made by the pineal gland. Melatonin helps your body know when
            it&#39;s time to:
            <Text style={styles.focusText}> Sleep</Text> or <Text style={styles.focusText}>wake up. </Text>
            Such as much hormones you can consume melatonin to help you sleep. But be careful, if you take too much melatonin, your brain
            wont produce it anymore and you will need to consume melatonin if you want to sleep.
          </Text>

          <Text style={styles.subheading}>When to use the sleep inducer?</Text>
          <Text style={styles.paragraph}>
            The sleep inducer is based on taking a pill which contains <Text style={styles.focusText}>Melatonin</Text> (mentioned in the
            previous topic) . As mentioned before melatonin has its risks, so you don&#39;t want to take too much, with that in mind, a safe
            amount to take, is around <Text style={styles.focusText}> 3 to 4 times per week. </Text>
            And always you have to make sure you&#39;re in a <Text style={styles.focusText}>calm, quiet, and a dark enviromment,</Text> for
            the inducer to work.
          </Text>

          <Text style={styles.subheading}>Blue pigmentation makes you stay awake</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.focusText}> Blue light</Text> is nothing more than a light with blue wavelenghts. What that does to you is:
            <Text style={styles.focusText}> Help you stay awake</Text>,
            <Text style={styles.focusText}> Boost your atention, and reaction time</Text>, if you need to stay awake for certain periods,
            use the blue light in your favor. But remember, do not use them when you want to sleep ( or inducing sleep ), blue light will
            make it difficult for you
          </Text>

          <Text style={styles.subheading}>Recommendations for a better sleep routine</Text>
          <Text style={styles.paragraph}>Try to keep you sleep schedule consistent.</Text>
          <Text style={styles.paragraph}>Always use dark, calm and quiet enviromments.</Text>
          <Text style={styles.paragraph}>Reduce your fluid intake before bedtime.</Text>
          <Text style={styles.paragraph}>
            Don’t eat a large meal before bedtime. If you are hungry at night, eat a light, healthy snack.
          </Text>
          <Text style={styles.paragraph}>If possible, don&#39;t use any eletronics before sleep</Text>

          <Text style={styles.subheading}>How to prevent the jet lag effect</Text>
          <Text style={styles.paragraph}>
            The jet lag effect happens whenever you are exposed to changes in the perception of time zones. To prevent it, it is recommended
            that you stay in shape, exercise regularly, get plenty of rest and follow a rich diet. It is also advised to avoid the use of
            sleep inducers unless necessary, and try to keep a regular sleep schedule that doesn&#39;t push your body too much.
          </Text>

          <Text style={styles.subheading}>Items that can be used to make resting easier</Text>
          <Text style={styles.paragraph}>
            Some items can be used to make sleeping more comfortable and easy, such as the use of sunglasses before going to sleep, to
            trigger the production of melatonin, or the use of a strapped on pillow to sleep more comfortably.
          </Text>

          <Text style={styles.subheading}>When to be exposed to light</Text>
          <Text style={styles.paragraph}>
            Exposure to sunlight is important for keeping a healthy sleep schedule, as it triggers the production of serotonin, that boosts
            mood and improves your capabilities of focusing on other tasks through the day. However, it should be avoided when trying to
            sleep.
          </Text>

          <Text style={styles.subheading}>Sleep routine</Text>
          <Text style={styles.paragraph}>
            Sleep schedules help not only crew members to prepare for a circadian shift, but also Mission Control Center employees, who
            often work shift work and other unusual schedules. Preparing the body for a circadian shift is the best way to avoid the
            potentially dangerous side effects that accompany a lack of sleep.Photo credit: Steven Lockley, Associate Professor of Medicine,
            Harvard University, Neuroscientist and member of NASA’s Fatigue Management Team and Dr. Smith Johnston, NASA Flight Surgeon,
            Medical Officer and Lead of NASA’s Fatigue Management Team Credits: NASA
          </Text>
          <Image source={scheduleImage} style={styles.image} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AdviceScreen
