import React from 'react'
import FormOneScreen from './src/screens/FormOne/FormOneScreen'
import FormTwoScreen from './src/screens/FormTwo/FormTwoScreen'
import StatusScreen from './src/screens/StatusScreen/StatusScreen'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/Home/HomeScreen'

const Stack = createStackNavigator()

const Routes = () => {
  const config = {
    animation: 'restSpeedThreshold',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Getting Started',
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        />
        <Stack.Screen
          name='FormOne'
          component={FormOneScreen}
          options={{
            title: 'Getting Started',
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        />
        <Stack.Screen
          name='FormTwo'
          component={FormTwoScreen}
          options={{
            title: 'Getting Started',
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        />
        <Stack.Screen name='Status' component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
