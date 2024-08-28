import { Alert } from 'react-native'
import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import {
  View,
  TextInput,
  Button,
  useColorScheme,
  StyleSheet,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '@/features/todos/todosSlice'
import { setNewTodoInput } from '@/features/todos/newTodoInputSlice'

export default function AddTodo() {
  const colorScheme = useColorScheme()
  const newTodoInput = useSelector((state) => state.newTodoInput)
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  function handleAddTodo() {
    const trimmedNewTodoInput = newTodoInput.trim()
    const maxTodoLength = 128
    const minTodoLength = 3

    let alertTitle = ''
    let alertMessage = ''

    if (trimmedNewTodoInput.length === 0) {
      alertTitle = 'Empty Todo'
      alertMessage = 'Please enter a todo.'
    } else if (trimmedNewTodoInput.length > maxTodoLength) {
      alertTitle = 'Todo Too Long'
      alertMessage = `Please keep the todo under ${maxTodoLength} characters.`
    } else if (trimmedNewTodoInput.length < minTodoLength) {
      alertTitle = 'Todo Too Short'
      alertMessage = `Please enter at least ${minTodoLength} characters`
    } else if (todos.some((todo) => todo.value === trimmedNewTodoInput)) {
      alertTitle = 'Duplicate Todo'
      alertMessage = 'This todo already exists.'
    }

    if (alertTitle) {
      Alert.alert(alertTitle, alertMessage, [{ text: 'OK' }])
      return
    }

    dispatch(addTodo(trimmedNewTodoInput)) // redux action
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

// ---

const styles = StyleSheet.create({
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },

  input: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    color: colors.text,
    fontSize: fontSizes.default,
    padding: 8,
    borderRadius: 10,
    marginRight: 2,
  },
})

const darkStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.inputBackgroundDark,
    color: colors.textDark,
  },
})
