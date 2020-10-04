import { StyleSheet } from 'react-native'
import colors from '../../Styles/_colors'

const styles = StyleSheet.create({
  scrollView: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  divider: {
    borderWidth: 1,
    borderColor: colors.secondaryDark,
    width: 370
  },
  titleProfile: {
    fontFamily: 'Roboto-Bold',
    fontSize: 35,
    color: colors.complementaryDark,
    marginBottom: 30
  },
  subheading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    color: colors.complementaryDark,
    marginBottom: 5,
    marginTop: 30,
    textAlign: 'left',
    width: '100%'
  },
  paragraph: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
    paddingLeft: 30,
    textAlign: 'left',
    width: '100%'
  },
  focusText: {
    fontFamily: 'Poppins-Bold',
    color: '#7200bf'
  }
})

export default styles
