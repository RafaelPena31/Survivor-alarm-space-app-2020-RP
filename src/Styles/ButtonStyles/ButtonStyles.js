import { StyleSheet } from 'react-native'
import colors from '../_colors'

const buttonStyles = StyleSheet.create({
  submit: {
    marginTop: 50,
    padding: 16,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  textSubmit: {
    color: colors.complementaryDark,
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginRight: 10
  }
})

export default buttonStyles
