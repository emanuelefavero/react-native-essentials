import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { Text, View, Pressable, useColorScheme, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { removeTodo } from '@/features/todos/todosSlice'

export default function Todo({ todo }) {
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()

  return (
    <Pressable onPress={() => dispatch(removeTodo(todo.id))}>
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
    </Pressable>
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
