import uuid from 'react-native-uuid'
import { createSlice } from '@reduxjs/toolkit'
import { initialTodos } from '@/data/initialTodos'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    // Add a todo at the top of the list
    addTodo: (state, action) => {
      return [{ id: uuid.v4(), value: action.payload }, ...state]
    },

    // Remove a todo by id
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer
