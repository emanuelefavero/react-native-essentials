import { Text, View } from 'react-native'
import styles from '../Layout.styles'

export default function Todo({ todo, colorScheme }) {
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
