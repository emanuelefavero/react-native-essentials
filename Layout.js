import { useEffect } from 'react'
import {
  View,
  Button,
  TextInput,
  SafeAreaView,
  useColorScheme,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '@/features/todos/todosSlice'
import { setNewTodoInput } from '@/features/todos/newTodoInputSlice'
import styles from '@/styles'
import Title from '@/components/Title'
import Todos from '@/components/Todos'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const colorScheme = useColorScheme() // dark mode
  const dispatch = useDispatch() // redux dispatch
  const [loaded, error] = useFonts({
    'SF Pro Rounded': require('@/assets/fonts/SF-Pro-Rounded-Bold.otf'),
  }) // load fonts

  // Todos - Redux
  const newTodoInput = useSelector((state) => state.newTodoInput)

  function handleAddTodo() {
    if (newTodoInput.trim() === '') return
    dispatch(addTodo(newTodoInput)) // redux action
    dispatch(setNewTodoInput(''))
  }

  // Hide splash screen when loaded or error
  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync()
  }, [loaded, error])

  if (!loaded && !error) return null // return null when fonts are not loaded

  return (
    <SafeAreaView
      style={[
        styles.appSafeArea,
        colorScheme === 'dark' && styles.darkBackground,
      ]}
    >
      {/* Status Bar */}
      <StatusBar style='auto' translucent />

      {/* App */}
      <View
        style={[
          styles.appContainer,
          colorScheme === 'dark' && styles.darkBackground,
        ]}
      >
        {/* Add Todo */}
        <View style={styles.addTodoContainer}>
          <TextInput
            value={newTodoInput}
            onChangeText={(text) => dispatch(setNewTodoInput(text))}
            placeholder='New Todo'
            placeholderTextColor={
              colorScheme === 'dark'
                ? 'rgb(129, 129, 136)'
                : 'rgb(145, 145, 152)'
            }
            clearButtonMode='while-editing'
            onSubmitEditing={handleAddTodo}
            returnKeyType='done'
            style={[styles.input, colorScheme === 'dark' && styles.darkInput]}
          />
          <Button title='Add Todo' onPress={handleAddTodo} />
        </View>

        {/* Title */}
        <Title />

        {/* Todos */}
        <Todos />
      </View>
    </SafeAreaView>
  )
}
