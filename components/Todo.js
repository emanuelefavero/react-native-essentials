import styles from '@/styles/styles'
import darkStyles from '@/styles/darkStyles'
import { Text, View, useColorScheme } from 'react-native'

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
      <Text
        style={[styles.todo, colorScheme === 'dark' && darkStyles.darkTodo]}
      >
        {todo.value}
      </Text>
    </View>
  )
}
