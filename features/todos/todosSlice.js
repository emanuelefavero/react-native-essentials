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
      // Toggle the completed state of the todo
      const updatedTodos = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })

      // Sort todos so that completed ones are at the bottom
      return updatedTodos.sort((a, b) => a.completed - b.completed)
    },

    // Remove a todo by id
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },

    // Delete all todos
    deleteAllTodos: () => {
      return []
    },

    // Delete all completed todos
    deleteCompletedTodos: (state) => {
      return state.filter((todo) => !todo.completed)
    },
  },
})

export const {
  addTodo,
  completeTodo,
  removeTodo,
  deleteAllTodos,
  deleteCompletedTodos,
} = todosSlice.actions

export default todosSlice.reducer
