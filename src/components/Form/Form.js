import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'

// eslint-disable-next-line react/prop-types
const Form = ({ children, onSubmit }) => {
  const data = {
    name: '',
    age: '',
    height: '',
    sex: '',
    weight: ''
  }

  return (
    <View style={styles.form}>
      {/* <Formik initialValues={data} onSubmit={onSubmit}> */}
      <>{children}</>
      {/* </Formik> */}
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
    width: '100%',
    padding: 20
  }
})
export default Form
