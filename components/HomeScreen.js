import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Todo from './Todo'

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeHeading}>Today's tasks</Text>
      <Todo task='This is task One' />
      <Todo task='This is task Two' />
      <Todo task='This is task Three' />
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#E8EAED'
  },
  homeHeading: {
    paddingTop: 80,
    fontSize: 24,
    marginBottom: 20
  }
})
