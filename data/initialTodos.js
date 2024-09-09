import uuid from 'react-native-uuid'

export const initialTodos = [
  { id: uuid.v4(), value: 'Add a new todo', completed: false },
  { id: uuid.v4(), value: 'Click a todo to complete it', completed: false },
  { id: uuid.v4(), value: '<- Or swipe left to complete it', completed: false },
  { id: uuid.v4(), value: '-> Swipe right to delete a todo', completed: true },
]
