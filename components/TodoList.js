import colors from '@/styles/colors'
import { View, useColorScheme, StyleSheet } from 'react-native'
import TodosTitle from '@/components/TodosTitle'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'
import AreYouSureModal from '@/components/AreYouSureModal'

export default function TodoList() {
  const colorScheme = useColorScheme() // dark mode

  return (
    <View
      style={[
        styles.appContainer,
        colorScheme === 'dark' && darkStyles.appContainer,
      ]}
    >
      <AddTodo />
      <TodosTitle />
      <AreYouSureModal />
      <Todos />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
})

const darkStyles = StyleSheet.create({
  appContainer: {
    backgroundColor: colors.backgroundDark,
  },
})
