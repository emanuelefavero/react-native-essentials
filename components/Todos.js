import colors from '@/styles/colors'
import {
  FlatList,
  View,
  useColorScheme,
  StyleSheet,
  Animated,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Todo from '@/components/Todo'
import CompletedTodosHeader from '@/components/CompletedTodosHeader'
import { deleteTodo, completeTodo } from '@/features/todos/todosSlice'
import { PanGestureHandler } from 'react-native-gesture-handler'
import React from 'react'

export default function Todos() {
  const dispatch = useDispatch()
  const colorScheme = useColorScheme()
  const todos = useSelector((state) => state.todos)

  // Separate todos into incomplete and completed
  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  // Swipe to delete or complete functionality for completed todos
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
      } else if (event.nativeEvent.translationX < -100) {
        // Trigger the completeTodo action when swiped left
        dispatch(completeTodo(todo.id))
      }

      // Reset the translationX to its original position
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }

    const animatedStyle = {
      transform: [{ translateX }],
    }

    // Red background for swipe right (delete)
    const redBackgroundOpacity = translateX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })

    // Green background for swipe left (complete)
    const greenBackgroundOpacity = translateX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })

    return (
      <View style={styles.todoWrapper}>
        {/* Green background for left swipe */}
        <Animated.View
          style={[styles.greenBackground, { opacity: greenBackgroundOpacity }]}
        />

        {/* Red background for right swipe */}
        <Animated.View
          style={[styles.redBackground, { opacity: redBackgroundOpacity }]}
        />

        {/* Swiping view */}
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View style={animatedStyle}>
            <Todo todo={todo} />
          </Animated.View>
        </PanGestureHandler>
      </View>
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

  todoWrapper: {
    position: 'relative',
    marginVertical: 5,
  },

  redBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.dangerMuted,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },

  greenBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.primaryMuted,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
})
