import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  SafeAreaView,
  useColorScheme,
} from 'react-native'
import uuid from 'react-native-uuid'

export default function App() {
  const colorScheme = useColorScheme()

  const [todos, setTodos] = useState([
    { id: uuid.v4(), value: 'Work' },
    { id: uuid.v4(), value: 'Eat' },
  ])
  const [inputText, setInputText] = useState('')

  function handleAddTodo() {
    if (inputText.trim() === '') return

    setTodos((prevTodos) => {
      return [
        {
          id: uuid.v4(),
          value: inputText,
        },
        ...prevTodos,
      ]
    })
    setInputText('')
  }

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
            style={[styles.input, colorScheme === 'dark' && styles.darkInput]}
          />
          <Button title='Add Todo' onPress={handleAddTodo} />
        </View>

        {/* Todos */}
        <ScrollView style={styles.todosContainer}>
          <Text
            style={[styles.title, colorScheme === 'dark' && styles.darkTitle]}
          >
            Todos
          </Text>

          {todos.map((todo) => (
            <Text
              key={todo.id}
              style={[styles.todo, colorScheme === 'dark' && styles.darkTodo]}
            >
              • {todo.value}
            </Text>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // Dark mode utils
  darkBackground: {
    backgroundColor: '#000',
  },
  darkInput: {
    backgroundColor: 'rgb(28, 28, 30)',
    color: '#fff',
  },
  darkTitle: {
    color: '#fff',
  },
  darkTodo: {
    color: '#fff',
  },

  // App
  appSafeArea: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 247)',
  },

  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(242, 242, 247)',
  },

  // Add Todo
  addTodoContainer: {
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },

  input: {
    flex: 1,
    backgroundColor: 'rgb(227, 227, 232)',
    color: 'rgb(0, 0, 0)',
    padding: 8,
    fontSize: 16,
    borderRadius: 10,
    marginRight: 2,
  },

  // Todos
  todosContainer: {
    flex: 1,
    paddingTop: 16,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  todo: {
    fontSize: 20,
    marginVertical: 4,
  },
})
