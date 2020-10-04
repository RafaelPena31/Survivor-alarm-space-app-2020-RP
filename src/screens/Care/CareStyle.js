import { StyleSheet } from 'react-native'
import colors from '../../Styles/_colors'

const styles = StyleSheet.create({
  careContainer: {
    justifyContent: 'space-between',
    paddingVertical: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'Montserrat-Bold',
    marginTop: 30
  },
  content: {
    alignItems: 'center',
    padding: 20
  },
  titleProfile: {
    fontFamily: 'Roboto-Bold',
    fontSize: 35,
    color: colors.complementaryDark,
    marginBottom: 30
  },
  divider: {
    borderWidth: 1,
    borderColor: colors.secondaryDark,
    width: 370
  },
  generalContainer: {
    paddingHorizontal: 20
  },
  dataUserContainerOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  }
})

export default styles
