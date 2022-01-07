export const addTodo = (type, payload) => {
  return {
    type: 'ADD_TODO',
    payload
  }
}

export const removeTodo = (type, payload) => {
  return {
    type: 'REMOVE_TODO',
    payload
  }
}