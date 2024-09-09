import colors from '@/styles/colors'
import {
  FlatList,
  View,
  useColorScheme,
  StyleSheet,
  Animated,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { PanGestureHandler } from 'react-native-gesture-handler'
import * as Haptics from 'expo-haptics'
import AntDesign from '@expo/vector-icons/AntDesign'
import Todo from '@/components/Todo'
import CompletedTodosHeader from '@/components/CompletedTodosHeader'
import { deleteTodo, completeTodo } from '@/features/todos/todosSlice'

export default function Todos() {
  const dispatch = useDispatch()
  const colorScheme = useColorScheme()
  const todos = useSelector((state) => state.todos)

  // Separate todos into incomplete and completed
  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  // Swipe to delete or complete functionality for todos
  const renderTodoWithSwipe = ({ item: todo }) => {
    const translateX = new Animated.Value(0)
    const swipeTriggerDistance = 125

    // Event handler for swipe gesture
    const onGestureEvent = Animated.event(
      [{ nativeEvent: { translationX: translateX } }],
      {
        useNativeDriver: true,
        listener: (event) => {
          const swipeDistance = event.nativeEvent.translationX

          // Trigger haptics and dispatch action when swipe distance is met
          if (swipeDistance > swipeTriggerDistance) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            dispatch(deleteTodo(todo.id))
          } else if (swipeDistance < -swipeTriggerDistance) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            dispatch(completeTodo(todo.id))
          }
          // Reset haptics trigger
          else if (Math.abs(swipeDistance) < swipeTriggerDistance) {
            return
          }
        },
      }
    )

    const onHandlerStateChange = (event) => {
      // Reset the translationX to its original position when swipe is complete
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }

    const animatedStyle = {
      transform: [{ translateX }],
    }

    // Scale icon size based on swipe distance
    const iconSize = translateX.interpolate({
      inputRange: [-100, 0, 100],
      outputRange: [1.15, 1, 1.15],
      extrapolate: 'clamp',
    })

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
      <View>
        {/* Green background for left swipe */}
        <Animated.View
          style={[styles.greenBackground, { opacity: greenBackgroundOpacity }]}
        >
          <Animated.Text style={{ transform: [{ scale: iconSize }] }}>
            <AntDesign
              name={todo.completed ? 'arrowup' : 'check'}
              size={22}
              color={colorScheme === 'dark' ? colors.text : colors.textDark}
            />
          </Animated.Text>
        </Animated.View>

        {/* Red background for right swipe */}
        <Animated.View
          style={[styles.redBackground, { opacity: redBackgroundOpacity }]}
        >
          <Animated.Text style={{ transform: [{ scale: iconSize }] }}>
            <AntDesign
              name='delete'
              size={22}
              color={colorScheme === 'dark' ? colors.text : colors.textDark}
            />
          </Animated.Text>
        </Animated.View>

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
      renderItem={renderTodoWithSwipe}
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
              renderItem={renderTodoWithSwipe}
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

  redBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.danger,
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
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
})
