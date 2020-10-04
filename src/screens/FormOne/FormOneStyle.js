import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    width: width
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 70
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'Roboto-Bold',
    marginTop: 30
  }
})

export default styles
