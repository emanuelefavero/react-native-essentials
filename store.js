import { configureStore } from '@reduxjs/toolkit'
import showAreYouSureModalReducer from '@/features/modal/showAreYouSureModalSlice'
import todosReducer from '@/features/todos/todosSlice'
import newTodoInputReducer from '@/features/todos/newTodoInputSlice'

export const store = configureStore({
  reducer: {
    // modal
    showAreYouSureModal: showAreYouSureModalReducer,

    // todos
    todos: todosReducer,
    newTodoInput: newTodoInputReducer,
  },
})
