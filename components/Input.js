import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, Platform, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native'

export default function Input({ setTaskList, taskList }) {
  const [task, setTask] = useState('');

  const handleAddTaskButton = () => {
    setTaskList([...taskList, task]);
    setTask('');
    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      style={styles.writeTaskWrapper}
    >
        <TextInput style={styles.input} placeholder='Write a task' value={task} onChangeText={setTask} />

        <TouchableOpacity onPress={handleAddTaskButton}>
          <View style={styles.addTaskButton}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 60,
    paddingHorizontal: 15
  },

  input: {
    minWidth: 240,
    padding: 15,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },

  addTaskButton: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
