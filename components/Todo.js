import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Todo({task}) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskTest}>
        <View style={styles.square}></View>
        <Text>{task}</Text>
      </View>
      <View style={styles.cicle}></View>
    </View>
)
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTest: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    height: 24,
    width: 24,
    borderRadius: 5,
    backgroundColor: '#55BCF666',
    opacity: .4,
    marginRight: 15
  },
  cicle: {
    backgroundColor: '#fff',
    height: 12,
    width: 12,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#55BCF666'
  }
  
})
