import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { useState, useRef } from 'react'
import {
  View,
  Pressable,
  TextInput,
  useColorScheme,
  StyleSheet,
  Animated,
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { useDispatch } from 'react-redux'
import { completeTodo, editTodo } from '@/features/todos/todosSlice'

export default function Todo({ todo }) {
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()
  const [isPressed, setIsPressed] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [newValue, setNewValue] = useState(todo.value)

  // Create an animated value for the text color, set to 0
  const colorAnimation = useRef(new Animated.Value(0)).current

  // Handle todo completion
  const handleCompleteTodo = () => {
    const duration = 200 // animation speed

    // Trigger the red color animation
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1, // animate to red
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(colorAnimation, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }),
    ]).start(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      dispatch(completeTodo(todo.id))
    })
  }

  // Dispatch the editTodo action to Redux when editing is done
  const handleEditTodo = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
    setIsEditing(false) // Exit editing mode
    dispatch(editTodo({ id: todo.id, value: newValue })) // Dispatch editTodo
  }

  // Set the color of the text based on the animation value
  const interpolatedColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      colorScheme === 'dark' ? colors.textDark : colors.text,
      colors.primary,
    ],
  })

  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
        handleCompleteTodo()
        setIsPressed(true)
      }}
      onLongPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        setIsEditing(true) // Enter editing mode on long press
      }}
      style={({ pressed }) =>
        pressed && {
          backgroundColor:
            colorScheme === 'dark'
              ? colors.pressedBackgroundDark
              : colors.pressedBackground,
        }
      }
    >
      <View
        key={todo.id}
        style={[
          styles.todoContainer,
          colorScheme === 'dark' && darkStyles.todoContainer,
          {
            backgroundColor: isEditing
              ? colorScheme === 'dark'
                ? colors.backgroundEditingDark
                : colors.backgroundEditing
              : colorScheme === 'dark'
              ? colors.backgroundDark
              : colors.background,
          },
        ]}
      >
        {/* Render a text input when editing */}
        {isEditing ? (
          <TextInput
            style={[
              styles.todoInput,
              {
                color: colorScheme === 'dark' ? colors.textDark : colors.text,
              },
            ]}
            value={newValue}
            onChangeText={setNewValue}
            onSubmitEditing={handleEditTodo}
            onBlur={handleEditTodo} // Save on blur
            autoFocus={true} // Focus on input when editing starts
          />
        ) : (
          <Animated.Text
            style={[
              styles.todo,
              {
                color: todo.completed
                  ? colorScheme === 'dark'
                    ? colors.textMutedDark
                    : colors.textMuted
                  : interpolatedColor,

                textDecorationLine: todo.completed
                  ? isPressed
                    ? 'none'
                    : 'line-through'
                  : isPressed
                  ? 'line-through'
                  : 'none',
              },
            ]}
          >
            {todo.value}
          </Animated.Text>
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  todoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  todo: {
    fontSize: fontSizes.todo,
    marginVertical: 8,
  },

  todoInput: {
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
