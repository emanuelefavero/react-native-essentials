import styles from '@/styles/styles'
import darkStyles from '@/styles/darkStyles'
import { View, TextInput, Button, useColorScheme } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '@/features/todos/todosSlice'
import { setNewTodoInput } from '@/features/todos/newTodoInputSlice'

export default function AddTodo() {
  const colorScheme = useColorScheme()
  const newTodoInput = useSelector((state) => state.newTodoInput)
  const dispatch = useDispatch()

  function handleAddTodo() {
    if (newTodoInput.trim() === '') return
    dispatch(addTodo(newTodoInput)) // redux action
    dispatch(setNewTodoInput(''))
  }

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        value={newTodoInput}
        onChangeText={(text) => dispatch(setNewTodoInput(text))}
        placeholder='New Todo'
        placeholderTextColor={
          colorScheme === 'dark' ? 'rgb(129, 129, 136)' : 'rgb(145, 145, 152)'
        }
        clearButtonMode='while-editing'
        onSubmitEditing={handleAddTodo}
        returnKeyType='done'
        style={[styles.input, colorScheme === 'dark' && darkStyles.input]}
      />
      <Button title='Add Todo' onPress={handleAddTodo} />
    </View>
  )
}
