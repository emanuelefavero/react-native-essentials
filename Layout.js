import { useState, useEffect } from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  useColorScheme,
  FlatList,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './features/todos/todosSlice'
import styles from './Layout.styles'
import Todo from './components/Todo'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  // Load fonts
  const [loaded, error] = useFonts({
    'SF Pro Rounded': require('./assets/fonts/SF-Pro-Rounded-Bold.otf'),
  })
  // ---

  // Dark mode
  const colorScheme = useColorScheme()

  // Redux
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  // Todos
  const [inputText, setInputText] = useState('')

  function handleAddTodo() {
    if (inputText.trim() === '') return

    dispatch(addTodo(inputText))

    setInputText('')
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
            value={inputText}
            onChangeText={(text) => setInputText(text)}
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
        <Text
          style={[styles.title, colorScheme === 'dark' && styles.darkTitle]}
        >
          Todo
        </Text>

        {/* Todos */}
        <FlatList
          data={todos}
          renderItem={({ item: todo }) => (
            <Todo todo={todo} colorScheme={colorScheme} />
          )}
          keyExtractor={(todo) => todo.id}
          style={styles.todosContainer}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  )
}
