import React from 'react'
import FormOneScreen from '../screens/FormOne/FormOneScreen'
import FormTwoScreen from '../screens/FormTwo/FormTwoScreen'
import AdviceScreen from '../screens/Advice/AdviceScreen'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home/HomeScreen'
import TabRoute from './TabRoute'

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
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        />
        <Stack.Screen
          name='Status'
          component={TabRoute}
          options={{
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        />
        <Stack.Screen
          name='Advice'
          component={AdviceScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
