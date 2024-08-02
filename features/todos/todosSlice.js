import uuid from 'react-native-uuid'
import { createSlice } from '@reduxjs/toolkit'
import { initialTodos } from '../../data/initialTodos'

const initialState = {
  todos: initialTodos,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        {
          id: uuid.v4(),
          value: action.payload, // input text passed as payload
        },
        ...state.todos,
      ]
    },
  },
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer
