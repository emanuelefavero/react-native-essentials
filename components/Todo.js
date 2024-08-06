import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { Text, View, useColorScheme, StyleSheet } from 'react-native'

export default function Todo({ todo }) {
  const colorScheme = useColorScheme()

  return (
    <View
      key={todo.id}
      style={[
        styles.todoContainer,
        colorScheme === 'dark' && darkStyles.todoContainer,
      ]}
    >
      <Text style={[styles.todo, colorScheme === 'dark' && darkStyles.todo]}>
        {todo.value}
      </Text>
    </View>
  )
}

// ---

const styles = StyleSheet.create({
  todoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  todo: {
    fontSize: fontSizes.todo,
    marginVertical: 8,
  },
})

const darkStyles = StyleSheet.create({
  todoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderDark,
  },

  todo: {
    color: colors.textDark,
  },
})
