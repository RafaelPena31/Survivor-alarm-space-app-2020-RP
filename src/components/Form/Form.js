import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'

const Form = ({ children }) => {
  const data = {
    name: '',
    age: '',
    height: '',
    sex: '',
    weight: ''
  }

  return (
    <View style={styles.form}>
      <Formik initialValues={data} onSubmit={() => alert('submitado my good')}>
        <>{children}</>
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 100,
    justifyContent: 'center',
    backgroundColor: '#7200bf',
    //height: '85%',
    width: '100%',
    padding: 20,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28
  }
})

export default Form

