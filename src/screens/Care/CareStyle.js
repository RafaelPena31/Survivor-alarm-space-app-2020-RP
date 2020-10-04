import { Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  careContainer: {
    width: width,
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
    fontFamily: 'Roboto-Bold',
    marginTop: 30
  },
  content: {
    alignItems: 'center',
    padding: 20
  }
})

export default styles
