import uuid from 'react-native-uuid'

export const initialTodos = [
  { id: uuid.v4(), value: 'Work', completed: false },
  { id: uuid.v4(), value: 'Eat', completed: false },
  { id: uuid.v4(), value: 'Sleep', completed: true },
  { id: uuid.v4(), value: 'Repeat', completed: false },
]
