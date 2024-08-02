import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice'
import newTodoInputReducer from './features/todos/newTodoInputSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    newTodoInput: newTodoInputReducer,
  },
})
