import React, { useState } from 'react'
import { StyleSheet, View, Text  } from 'react-native'
import Input from './Input.js'
import Todo from './Todo'

export default function HomeScreen() {
  const [taskList, setTaskList] = useState([]);

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeHeading}>Today's tasks</Text>
      {
        taskList && taskList.map(task => <Todo task={task} />)
      }
      <Input setTaskList={setTaskList} taskList={taskList} />
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
    marginBottom: 20,
    fontWeight: 'bold',
  }
})
