import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  safeAreaView: {
    width: width,
    height: '100%',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    paddingVertical: 30
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
