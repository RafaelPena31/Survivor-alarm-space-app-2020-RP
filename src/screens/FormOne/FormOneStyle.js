import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
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
  },
  pickerContainer: {
    width: 350,
    height: 55,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 13,
    paddingVertical: 6,
    marginBottom: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#F0F0F5',
    color: '#fff'
  },
  picker: {
    color: '#fff'
  }
})

export default styles
