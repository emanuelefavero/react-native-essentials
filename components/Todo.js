import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { useRef } from 'react'
import {
  View,
  Pressable,
  useColorScheme,
  StyleSheet,
  Animated,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { removeTodo } from '@/features/todos/todosSlice'

export default function Todo({ todo }) {
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()

  // Create an animated value for the text color, set to 0
  const colorAnimation = useRef(new Animated.Value(0)).current

  // TIP: In this handler, we animate the text color to red before removing the todo
  const handleRemoveTodo = () => {
    const duration = 200 // animation speed

    // Trigger the red color animation
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1, // animate to red
        duration,
        useNativeDriver: false, // required for color animation
      }),
      Animated.timing(colorAnimation, {
        toValue: 0, // animate back to original color
        duration,
        useNativeDriver: false,
      }),
    ]).start(() => {
      // After animation, remove the todo
      dispatch(removeTodo(todo.id))
    })
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
      onPress={handleRemoveTodo}
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
        ]}
      >
        <Animated.Text style={[styles.todo, { color: interpolatedColor }]}>
          {todo.value}
        </Animated.Text>
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
