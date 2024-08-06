import { FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Todo from '@/components/Todo'

export default function Todos() {
  const todos = useSelector((state) => state.todos.todos)

  return (
    <FlatList
      data={todos}
      renderItem={({ item: todo }) => <Todo todo={todo} />}
      keyExtractor={(todo) => todo.id}
      style={styles.todosContainer}
      alwaysBounceVertical={false}
    />
  )
}

// ---

const styles = StyleSheet.create({
  todosContainer: {
    flex: 1,
  },
})
