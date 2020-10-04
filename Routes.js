import React from 'react'
import FormOneScreen from './src/screens/FormOne/FormOneScreen'
import FormTwoScreen from './src/screens/FormTwo/FormTwoScreen'
import StatusScreen from './src/screens/StatusScreen/StatusScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='FormOne' component={FormOneScreen} options={{ title: 'Getting Started' }} />
        <Stack.Screen name='FormTwo' component={FormTwoScreen} options={{ title: 'Getting Started' }} />
        <Stack.Screen name='Status' component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
