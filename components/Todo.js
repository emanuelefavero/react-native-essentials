import { Text, View, useColorScheme } from 'react-native'
import styles from '../Layout.styles'

export default function Todo({ todo }) {
  const colorScheme = useColorScheme()

  return (
    <View
      key={todo.id}
      style={[
        styles.todoContainer,
        colorScheme === 'dark' && styles.darkTodoContainer,
      ]}
    >
      <Text style={[styles.todo, colorScheme === 'dark' && styles.darkTodo]}>
        {todo.value}
      </Text>
    </View>
  )
}
