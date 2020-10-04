import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './StatusStyle'

const StatusScreen = ({ children }) => {
  return (
    <SafeAreaView style={styles.statusContainer}>
      <ScrollView>
        <View style={styles.bottomContent}>
          <View style={styles.progressText}>
            <Text>Saúde física</Text>
            <Text>50%</Text>
          </View>
          <View style={styles.progressBar}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StatusScreen
