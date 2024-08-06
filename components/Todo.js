import styles from '@/styles/styles'
import dark from '@/styles/dark'
import { Text, View, useColorScheme } from 'react-native'

export default function Todo({ todo }) {
  const colorScheme = useColorScheme()

  return (
    <View
      key={todo.id}
      style={[
        styles.todoContainer,
        colorScheme === 'dark' && styles.todoContainer,
      ]}
    >
      <Text style={[styles.todo, colorScheme === 'dark' && dark.todo]}>
        {todo.value}
      </Text>
    </View>
  )
}
