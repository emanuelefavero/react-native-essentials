import colors from '@/styles/colors'
import {
  FlatList,
  View,
  useColorScheme,
  StyleSheet,
  Animated,
  Text,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Todo from '@/components/Todo'
import CompletedTodosHeader from '@/components/CompletedTodosHeader'
import { deleteTodo } from '@/features/todos/todosSlice'
import { PanGestureHandler } from 'react-native-gesture-handler'
import React from 'react'

export default function Todos() {
  const dispatch = useDispatch()
  const colorScheme = useColorScheme()
  const todos = useSelector((state) => state.todos)

  // Separate todos into incomplete and completed
  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  // Swipe to delete functionality for completed todos
  const renderCompletedTodo = ({ item: todo }) => {
    const translateX = new Animated.Value(0)

    const onGestureEvent = Animated.event(
      [{ nativeEvent: { translationX: translateX } }],
      { useNativeDriver: true }
    )

    const onHandlerStateChange = (event) => {
      if (event.nativeEvent.translationX > 100) {
        // Trigger the deleteTodo action when swiped right
        dispatch(deleteTodo(todo.id))
      }
      // Reset the translationX to its original position
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }

    return (
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={{ transform: [{ translateX }] }}>
          <Todo todo={todo} />
        </Animated.View>
      </PanGestureHandler>
    )
  }

  return (
    <FlatList
      data={incompleteTodos}
      renderItem={({ item: todo }) => <Todo todo={todo} />}
      keyExtractor={(todo) => todo.id}
      ListFooterComponent={() => (
        <>
          {incompleteTodos.length > 0 && completedTodos.length > 0 && (
            <View
              style={[
                styles.separator,
                {
                  backgroundColor:
                    colorScheme === 'dark'
                      ? colors.separatorDark
                      : colors.separator,
                },
              ]}
            />
          )}
          {completedTodos.length > 0 && (
            <FlatList
              data={completedTodos}
              renderItem={renderCompletedTodo}
              keyExtractor={(todo) => todo.id}
              ListHeaderComponent={
                completedTodos.length > 0 ? <CompletedTodosHeader /> : null
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

const styles = StyleSheet.create({
  todosContainer: {
    flex: 1,
  },

  separator: {
    height: 1,
  },
})
