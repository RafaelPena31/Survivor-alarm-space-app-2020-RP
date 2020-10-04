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
    marginBottom: 30,
    textAlign: 'center'
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
    paddingVertical: 5
  },
  touchableItem: {
    backgroundColor: '#fff',
    width: 170,
    height: 180,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 15,
    alignSelf: 'center'
  }
})

export default styles
