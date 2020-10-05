import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Fontisto'
import colors from '../Styles/_colors'
import StatusScreen from '../screens/Status/StatusScreen'
import CareScreen from '../screens/Care/CareScreen'
import { AsyncStorage } from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator()

function TabRoute() {
  const [healthBar, setHealthBar] = useState(0)
  const [sleepBar, setSleepBar] = useState(0)
  const [foodBar, setFoodBar] = useState(0)
  const [waterBar, setWaterBar] = useState(0)
  const [lightBar, setLightBar] = useState(0)
  const [melatoninBar, setMelatoninBar] = useState(0)

  useEffect(() => {
    ;(async () => {
      try {
        setHealthBar((await AsyncStorage.getItem('healthBar')) || 0)
        setSleepBar((await AsyncStorage.getItem('sleepBar')) || 0)
        setFoodBar((await AsyncStorage.getItem('foodBar')) || 0)
        setWaterBar((await AsyncStorage.getItem('waterBar')) || 0)
        setLightBar((await AsyncStorage.getItem('lightBar')) || 0)
        setMelatoninBar((await AsyncStorage.getItem('melatoninBar')) || 0)
      } catch (e) {
        alert(e)
      }
    })()
  }, [])

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}>
      <Screen
        name='Status'
        children={() => (
          <StatusScreen
            sets={{
              healthBar,
              setHealthBar,
              sleepBar,
              setSleepBar,
              foodBar,
              setFoodBar,
              waterBar,
              setWaterBar,
              lightBar,
              setLightBar,
              melatoninBar,
              setMelatoninBar
            }}
          />
        )}
        options={{
          tabBarLabel: 'Status',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ size, focused }) => {
            return <Icon name='area-chart' size={size} color={focused ? colors.complementarySemiDark : colors.complementaryDark} />
          }
        }}
      />
      <Screen
        name='Care'
        children={() => <CareScreen
          sets={{
            healthBar,
            setHealthBar,
            sleepBar,
            setSleepBar,
            foodBar,
            setFoodBar,
            waterBar,
            setWaterBar,
            lightBar,
            setLightBar,
            melatoninBar,
            setMelatoninBar
          }} />}
        options={{
          tabBarLabel: 'Your infos and cares',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ size, focused }) => {
            return <Icon name='heartbeat-alt' size={size} color={focused ? colors.complementarySemiDark : colors.complementaryDark} />
          }
        }}
      />
    </Navigator>
  )
}

export default TabRoute
