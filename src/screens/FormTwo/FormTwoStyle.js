import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#7200bf'
  },
  pickerList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  astroIcon: {
    color: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectedItem: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#34CB79',
    borderWidth: 5
  },

  selectedIcon: {
    color: '#34CB79'
  },

  unselectedIcon: {
    color: '#000'
  },

  touchableItem: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center'
  },

  greenHeaderText: {
    color: '#34CB79'
  },

  blackHeaderText: {
    color: '#000'
  },

  header: {
    marginBottom: 50,
    fontSize: 28,
    fontWeight: '700',
    color: '#fff'
  },

  image: {
    width: 100,
    height: 100,
    margin: 15,
    alignSelf: 'center'
  },
  astro: {
    marginBottom: 20,
    flexShrink: 0
  },
  scrollView: {
    height: '100%'
  }
})

export default styles
