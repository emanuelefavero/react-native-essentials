import uuid from 'react-native-uuid'
import { createSlice } from '@reduxjs/toolkit'
import { initialTodos } from '@/data/initialTodos'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    // Add a todo at the top of the list
    addTodo: (state, action) => {
      return [
        { id: uuid.v4(), value: action.payload, completed: false },
        ...state,
      ]
    },

    // Complete a todo by id
    completeTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    },

    // Remove a todo by id
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },

    // Delete all todos
    deleteAllTodos: () => {
      return []
    },
  },
})

export const { addTodo, completeTodo, removeTodo, deleteAllTodos } =
  todosSlice.actions

export default todosSlice.reducer
