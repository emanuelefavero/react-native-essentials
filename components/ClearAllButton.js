import colors from '@/styles/colors'
import fontSizes from '@/styles/fontSizes'
import { Text, Pressable, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setShowAreYouSureModal } from '@/features/modal/showAreYouSureModalSlice'

export default function ClearAllButton() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  if (todos.length === 0) return null

  return (
    <Pressable
      onPress={() => dispatch(setShowAreYouSureModal(true))}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <Text style={styles.clearButtonText}>Clear All</Text>
    </Pressable>
  )
}

// ---

const styles = StyleSheet.create({
  clearButtonText: {
    color: colors.danger,
    fontSize: fontSizes.button,
  },
})
