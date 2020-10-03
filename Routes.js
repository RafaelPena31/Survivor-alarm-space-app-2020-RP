import React from 'react'
import FormOne from './src/screens/FormOne'
import FormTwo from './src/screens/FormTwo'
import Settings from './src/screens/Settings'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#000' }, headerTitleStyle: { color: '#ccc' } }}>
        <Stack.Screen name='FormOne' component={FormOne} options={{ title: 'Getting Started' }} />
        <Stack.Screen name='FormTwo' component={FormTwo} options={{ title: 'Getting Started' }} />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes