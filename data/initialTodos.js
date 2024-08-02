import uuid from 'react-native-uuid'

export const initialTodos = [
  { id: uuid.v4(), value: 'Work' },
  { id: uuid.v4(), value: 'Eat' },
  { id: uuid.v4(), value: 'Sleep' },
  { id: uuid.v4(), value: 'Repeat' },
]
