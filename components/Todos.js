import colors from '@/styles/colors'
import React from 'react'
import { FlatList, View, Text, useColorScheme, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Todo from '@/components/Todo'

export default function Todos() {
  const colorScheme = useColorScheme()
  const todos = useSelector((state) => state.todos)

  // Separate todos into incomplete and completed
  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <FlatList
      data={incompleteTodos}
      renderItem={({ item: todo }) => <Todo todo={todo} />}
      keyExtractor={(todo) => todo.id}
      ListFooterComponent={() => (
        <>
          {incompleteTodos.length > 0 && completedTodos.length > 0 && (
            <View style={styles.separator} />
          )}
          {completedTodos.length > 0 && (
            <FlatList
              data={completedTodos}
              renderItem={({ item: todo }) => <Todo todo={todo} />}
              keyExtractor={(todo) => todo.id}
              ListHeaderComponent={
                completedTodos.length > 0 ? (
                  <Text
                    style={[
                      styles.header,
                      {
                        color:
                          colorScheme === 'dark'
                            ? colors.textDark
                            : colors.text,
                      },
                    ]}
                  >
                    Completed
                  </Text>
                ) : null
              }
            />
          )}
        </>
      )}
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
  header: {
    fontFamily: 'SF Pro Rounded',
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
})
