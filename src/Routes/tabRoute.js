import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Fontisto'
import colors from '../Styles/_colors'
import StatusScreen from '../screens/Status/StatusScreen'
import CareScreen from '../screens/Care/CareScreen'

const { Navigator, Screen } = createBottomTabNavigator()

function TabRoute() {
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
        component={StatusScreen}
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
        component={CareScreen}
        options={{
          tabBarLabel: 'Your cares',
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
