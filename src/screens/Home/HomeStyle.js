import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../Styles/_colors'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.secondaryDark
  },
  image: {
    resizeMode: 'contain',
    width: 400
  },
  titleContainer: {
    padding: 15
  },
  title: {
    width: width,
    alignItems: 'flex-start',
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
    marginTop: 100,
    marginLeft: 7
  },
  button: {
    margin: 7,
    marginTop: 50,
    padding: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginRight: 10
  }
})

export default styles
